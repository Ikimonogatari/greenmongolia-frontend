"use client";
import {
  getDirectusImageUrl,
  getTranslation,
  useGetNewsByIdQuery,
  useGetNewsQuery,
} from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SocialShareV3 from "../social/SocialShareV3";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidgetGraphQL from "../widgets/RecentPostsWidgetGraphQL";
import CategoryWidget from "../widgets/CategoryWidget";
import GalleryWidget from "../widgets/GalleryWidget";
import ArchiveWidget from "../widgets/ArchiveWidget";
import FollowWidget from "../widgets/FollowWidget";
import TagsWidget from "../widgets/TagsWidget";

interface BlogSingleProps {
  newsId: string;
}

const BlogSingleWithSidebarContentGraphQL = ({ newsId }: BlogSingleProps) => {
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";

  // Fetch the specific news article
  const { data: newsItem, isLoading, error } = useGetNewsByIdQuery(newsId);

  // Fetch all news for navigation
  const { data: allNews } = useGetNewsQuery();

  // Format date helper
  const formatDate = (dateString?: string) => {
    if (!dateString) return { day: "01", month: "Jan", year: "2024" };
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleString(locale, { month: "short" }),
      year: date.getFullYear().toString(),
    };
  };

  if (isLoading) {
    return (
      <div className="blog-area single full-blog right-sidebar full-blog default-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Loading article...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="blog-area single full-blog right-sidebar full-blog default-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Article not found</p>
              <Link href="/blog-standard" className="btn btn-primary mt-3">
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const translation = getTranslation(newsItem.translations, languageCode);
  const imageUrl = getDirectusImageUrl(newsItem.cover_image || newsItem.image);
  const dateInfo = formatDate(newsItem.date_created);

  // Get published news for navigation
  const publishedNews =
    allNews
      ?.filter((item) => item.status === "published")
      ?.sort((a, b) => {
        const dateA = new Date(a.date_created || 0).getTime();
        const dateB = new Date(b.date_created || 0).getTime();
        return dateB - dateA;
      }) || [];

  // Find current article index
  const currentIndex = publishedNews.findIndex((item) => item.id === newsId);

  // Get previous and next articles
  const previousArticle =
    currentIndex > 0 ? publishedNews[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < publishedNews.length - 1 && currentIndex !== -1
      ? publishedNews[currentIndex + 1]
      : null;

  const previousTranslation = previousArticle
    ? getTranslation(previousArticle.translations, languageCode)
    : null;
  const nextTranslation = nextArticle
    ? getTranslation(nextArticle.translations, languageCode)
    : null;

  // Get first two words of title
  const getFirstTwoWords = (text?: string) =>
    text?.split(" ").slice(0, 2).join(" ") || "Article";

  return (
    <div className="blog-area single full-blog right-sidebar full-blog default-padding">
      <div className="container">
        <div className="blog-items">
          <div className="row">
            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
              <div className="blog-style-one item">
                <div className="blog-style-two item">
                  <div className="thumb">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={translation?.title || "News"}
                        width={1020}
                        height={510}
                        style={{ width: "100%", height: "auto" }}
                        unoptimized={true}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "510px",
                          background: "#e9ecef",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="fas fa-newspaper"
                          style={{ fontSize: "64px", color: "#adb5bd" }}
                        />
                      </div>
                    )}
                    <div className="date">
                      <strong>{dateInfo.day}</strong>{" "}
                      <span>
                        {dateInfo.month}, {dateInfo.year}
                      </span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-user-circle" /> Admin
                        </li>
                        {newsItem.tags && newsItem.tags.length > 0 && (
                          <li>
                            <i className="fas fa-tags" />{" "}
                            {newsItem.tags.length} Tags
                          </li>
                        )}
                      </ul>
                    </div>

                    <h2>{translation?.title || "Untitled"}</h2>

                    {translation?.description && (
                      <p className="lead">{translation.description}</p>
                    )}

                    {translation?.body && (
                      <div
                        className="content-body"
                        dangerouslySetInnerHTML={{ __html: translation.body }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Post Tags Share */}
              <div className="post-tags share">
                <div className="tags">
                  <h4>Tags: </h4>
                  {newsItem.tags && newsItem.tags.length > 0 ? (
                    newsItem.tags.map((tag) => {
                      const tagTranslation = getTranslation(
                        tag.news_tag_id.translations,
                        languageCode,
                      );
                      return (
                        <Link
                          href="#"
                          key={tag.id}
                          onClick={(e) => e.preventDefault()}
                        >
                          {tagTranslation?.name || ""}
                        </Link>
                      );
                    })
                  ) : (
                    <span>No tags</span>
                  )}
                </div>
                <div className="social">
                  <h4>Share:</h4>
                  <ul>
                    <SocialShareV3 />
                  </ul>
                </div>
              </div>

              {/* Post Pagination */}
              <div className="post-pagi-area">
                {previousArticle && (
                  <div className="post-previous">
                    <Link
                      href={`/blog-single-with-sidebar/${previousArticle.id}`}
                    >
                      <div className="icon">
                        <i className="fas fa-angle-double-left"></i>
                      </div>
                      <div className="nav-title">
                        {" "}
                        Previous Post{" "}
                        <h5>
                          {getFirstTwoWords(previousTranslation?.title)}
                        </h5>
                      </div>
                    </Link>
                  </div>
                )}
                {nextArticle && (
                  <div className="post-next">
                    <Link href={`/blog-single-with-sidebar/${nextArticle.id}`}>
                      <div className="nav-title">
                        Next Post{" "}
                        <h5>{getFirstTwoWords(nextTranslation?.title)}</h5>
                      </div>
                      <div className="icon">
                        <i className="fas fa-angle-double-right"></i>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Comments Section REMOVED as requested */}
            </div>

            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-100 mt-xs-50">
              <aside>
                <SearchWidget />
                <RecentPostsWidgetGraphQL />
                <CategoryWidget />
                <GalleryWidget />
                <ArchiveWidget />
                <FollowWidget />
                <TagsWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleWithSidebarContentGraphQL;
