"use client";
import {
  getDirectusImageUrl,
  getTranslation,
  useGetNewsQuery,
} from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BlogV1GraphQL = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";

  const { data: newsData, isLoading, error } = useGetNewsQuery();

  // Get published news and sort by date
  const publishedNews = newsData
    ?.filter((item) => item.status === "published")
    ?.sort((a, b) => {
      const dateA = new Date(a.date_created || 0).getTime();
      const dateB = new Date(b.date_created || 0).getTime();
      return dateB - dateA; // newest first
    });

  // Take first 3 articles
  const articles = publishedNews?.slice(0, 3) || [];
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  // Format date helper
  const formatDate = (dateString?: string) => {
    if (!dateString) return { day: "01", month: "Jan", year: "2024" };
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleString("en-US", { month: "short" }),
      year: date.getFullYear().toString(),
    };
  };

  if (isLoading) {
    return (
      <div className="blog-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">{t("latestNews.subTitle")}</h4>
                <h2 className="title">{t("latestNews.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>{t("latestNews.loading")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">{t("latestNews.subTitle")}</h4>
                <h2 className="title">{t("latestNews.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>{t("latestNews.error")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="blog-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">{t("latestNews.subTitle")}</h4>
                <h2 className="title">{t("latestNews.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>{t("latestNews.noPosts")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="blog-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">{t("latestNews.subTitle")}</h4>
                <h2 className="title">{t("latestNews.title")}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="blog-items">
            <div className="row">
              {/* Featured Article (Large) */}
              {featuredArticle &&
                (() => {
                  const translation = getTranslation(
                    featuredArticle.translations,
                    languageCode,
                  );
                  const imageUrl = getDirectusImageUrl(
                    featuredArticle.image || featuredArticle.cover_image,
                  );
                  const dateInfo = formatDate(featuredArticle.date_created);

                  return (
                    <div
                      className="col-lg-8 single-item"
                      key={featuredArticle.id}
                    >
                      <div className="item">
                        <div className="thumb">
                          <Link
                            href={`/blog-with-sidebar/${featuredArticle.id}`}
                          >
                            {imageUrl ? (
                              <Image
                                src={imageUrl}
                                alt={translation?.title || "News"}
                                width={800}
                                height={500}
                                className="w-100"
                                style={{ height: "auto", objectFit: "cover" }}
                                unoptimized={true}
                              />
                            ) : (
                              <Image
                                src="/assets/img/blog/1.jpg"
                                alt={translation?.title || "News"}
                                width={800}
                                height={500}
                                className="w-100"
                              />
                            )}
                          </Link>
                          <div className="date">
                            <strong>{dateInfo.day}</strong>
                            <span>{dateInfo.month}</span>
                          </div>
                        </div>
                        <div className="info">
                          <div className="meta">
                            <ul>
                              <li>
                                <i className="fas fa-user-circle" />
                                <Link href="#">Admin</Link>
                              </li>
                              <li>
                                <i className="fas fa-comments" />
                                <Link href="#">
                                  {featuredArticle.tags?.length || 0} Tags
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h2>
                            <Link
                              href={`/blog-with-sidebar/${featuredArticle.id}`}
                            >
                              {translation?.title || "Untitled"}
                            </Link>
                          </h2>
                          <p>{translation?.description || ""}</p>
                          <Link
                            className="btn-simple"
                            href={`/blog-with-sidebar/${featuredArticle.id}`}
                          >
                            <i className="fas fa-angle-right" />{" "}
                            {t("latestNews.continueReading")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })()}

              {/* Side Articles (Small) */}
              <div className="col-lg-4 single-item">
                {sideArticles.map((article) => {
                  const translation = getTranslation(
                    article.translations,
                    languageCode,
                  );
                  const imageUrl = getDirectusImageUrl(
                    article.image || article.cover_image,
                  );
                  const dateInfo = formatDate(article.date_created);

                  return (
                    <div className="item" key={article.id}>
                      <div className="thumb">
                        <Link href={`/blog-with-sidebar/${article.id}`}>
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={translation?.title || "News"}
                              width={400}
                              height={300}
                              className="w-100"
                              style={{ height: "auto", objectFit: "cover" }}
                              unoptimized={true}
                            />
                          ) : (
                            <Image
                              src="/assets/img/blog/2.jpg"
                              alt={translation?.title || "News"}
                              width={400}
                              height={300}
                              className="w-100"
                            />
                          )}
                        </Link>
                        <div className="date">
                          <strong>{dateInfo.day}</strong>
                          <span>{dateInfo.month}</span>
                        </div>
                      </div>
                      <div className="info">
                        <div className="meta">
                          <ul>
                            <li>
                              <i className="fas fa-user-circle" />
                              <Link href="#">Admin</Link>
                            </li>
                            <li>
                              <i className="fas fa-comments" />
                              <Link href="#">
                                {article.tags?.length || 0} Tags
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h4>
                          <Link href={`/blog-with-sidebar/${article.id}`}>
                            {translation?.title || "Untitled"}
                          </Link>
                        </h4>
                        <Link
                          className="btn-simple"
                          href={`/blog-with-sidebar/${article.id}`}
                        >
                          <i className="fas fa-angle-right" />{" "}
                          {t("latestNews.continueReading")}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1GraphQL;
