"use client";
import {
  getDirectusImageUrl,
  getTranslation,
  useGetNewsQuery,
} from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const RecentPostsWidgetGraphQL = () => {
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";

  const { data: newsData, isLoading } = useGetNewsQuery();

  // Get 3 most recent published news
  const recentNews =
    newsData
      ?.filter((item) => item.status === "published")
      ?.sort((a, b) => {
        const dateA = new Date(a.date_created || 0).getTime();
        const dateB = new Date(b.date_created || 0).getTime();
        return dateB - dateA;
      })
      ?.slice(0, 3) || [];

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Jan 01, 2024";
    const date = new Date(dateString);
    return `${date.toLocaleString(locale, { month: "short" })} ${date.getDate().toString().padStart(2, "0")}, ${date.getFullYear()}`;
  };

  return (
    <div className="sidebar-item recent-post">
      <div className="title">
        <h4>Recent Posts</h4>
      </div>
      <ul>
        {isLoading ? (
          <li>
            <div className="info">
              <div className="meta-title">
                <span className="post-date">Loading...</span>
              </div>
            </div>
          </li>
        ) : recentNews.length > 0 ? (
          recentNews.map((article) => {
            const translation = getTranslation(
              article.translations,
              languageCode,
            );
            const imageUrl = getDirectusImageUrl(
              article.image || article.cover_image,
            );

            return (
              <li key={article.id}>
                <div className="thumb">
                  <Link href={`/blog-single-with-sidebar/${article.id}`}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={translation?.title || "News"}
                        width={150}
                        height={150}
                        style={{ width: "100%", height: "auto" }}
                        unoptimized={true}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "80px",
                          background: "#e9ecef",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className="fas fa-image" />
                      </div>
                    )}
                  </Link>
                </div>
                <div className="info">
                  <div className="meta-title">
                    <span className="post-date">
                      {formatDate(article.date_created)}
                    </span>
                  </div>
                  <Link href={`/blog-single-with-sidebar/${article.id}`}>
                    {translation?.title || "Untitled"}
                  </Link>
                </div>
              </li>
            );
          })
        ) : (
          <li>
            <div className="info">
              <div className="meta-title">
                <span className="post-date">No recent posts</span>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RecentPostsWidgetGraphQL;
