"use client";
import {
  getDirectusImageUrl,
  getTranslation,
  useGetNewsQuery,
} from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./NewsSection.css";

const NewsSection = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";

  const { data: newsData, isLoading, error } = useGetNewsQuery();

  // Get published news and sort by date - Show only 3 latest
  const publishedNews =
    newsData
      ?.filter((item) => item.status === "published")
      ?.sort((a, b) => {
        const dateA = new Date(a.date_created || 0).getTime();
        const dateB = new Date(b.date_created || 0).getTime();
        return dateB - dateA;
      })
      ?.slice(0, 3) || [];

  // Format date helper
  const formatDate = (dateString?: string) => {
    if (!dateString) return { day: "01", month: "Jan" };
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleString(locale, { month: "short" }),
    };
  };

  if (isLoading) {
    return (
      <section className="news-section default-padding bottom-less">
        <div className="news-container container">
          <div className="news-header">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h5 className="sub-title">{t("latestNews.subTitle")}</h5>
                  <h2 className="title">{t("latestNews.title")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="news-loading">
            <p>{t("latestNews.loading")}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !publishedNews.length) {
    return (
      <section className="news-section default-padding bottom-less">
        <div className="news-container container">
          <div className="news-header">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h5 className="sub-title">{t("latestNews.subTitle")}</h5>
                  <h2 className="title">{t("latestNews.title")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="news-empty">
            <p>{error ? t("latestNews.error") : t("latestNews.noPosts")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="news-section default-padding bottom-less">
      <div className="news-container container">
        <div className="news-header">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t("latestNews.subTitle")}</h5>
                <h2 className="title">{t("latestNews.title")}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="news-grid">
          {publishedNews.map((article) => {
            const translation = getTranslation(
              article.translations,
              languageCode,
            );
            const imageUrl = getDirectusImageUrl(
              article.cover_image || article.image,
            );
            const dateInfo = formatDate(article.date_created);

            return (
              <article className="news-card" key={article.id}>
                <Link
                  href={`/blog-single-with-sidebar/${article.id}`}
                  className="news-card-link"
                >
                  <div className="news-card-image-wrapper">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={translation?.title || "News"}
                        fill
                        className="news-card-image"
                        style={{ objectFit: "cover" }}
                        unoptimized={true}
                      />
                    ) : (
                      <div className="news-card-placeholder">
                        <i className="fas fa-newspaper" />
                      </div>
                    )}
                    <div className="news-card-date">
                      <span className="date-day">{dateInfo.day}</span>
                      <span className="date-month">{dateInfo.month}</span>
                    </div>
                  </div>

                  <div className="news-card-content">
                    {article.tags && article.tags.length > 0 && (
                      <div className="news-card-tags">
                        {article.tags.slice(0, 2).map((tag) => {
                          const tagTranslation = getTranslation(
                            tag.news_tag_id.translations,
                            languageCode,
                          );
                          return (
                            <span key={tag.id} className="news-tag">
                              {tagTranslation?.name || ""}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    <h3 className="news-card-title">
                      {translation?.title || "Untitled"}
                    </h3>

                    {translation?.description && (
                      <p className="news-card-description">
                        {translation.description.length > 150
                          ? `${translation.description.substring(0, 150)}...`
                          : translation.description}
                      </p>
                    )}

                    <div className="news-card-footer">
                      <span className="news-read-more">
                        {t("latestNews.continueReading")}
                        <i className="fas fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {publishedNews.length >= 3 && (
          <div className="news-view-all">
            <Link href="/blog-standard" className="view-all-button">
              {t("latestNews.viewAll") || "View All News"}
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
