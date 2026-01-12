"use client";
import { useGetArticlesQuery } from "@/store/api/articlesApi";
import { transformArticleToBlog } from "@/store/api/articlesApi";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SingleBlogV1 from "./SingleBlogV1";

const BlogV1 = () => {
    const t = useTranslations("Home");
    const { data: articlesData, isLoading, error } = useGetArticlesQuery();
    
    // Transform articles to blog format
    const articles = articlesData?.data 
        ? articlesData.data.slice(0, 3).map(transformArticleToBlog)
        : [];

    // Get the first article for the featured large card
    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1, 3);

    // Handle image URL for featured article
    const getImageSrc = (thumb?: string) => {
        if (!thumb) return "/assets/img/blog/default-thumb.jpg";
        if (thumb.startsWith('http') || thumb.startsWith('/')) {
            return thumb;
        }
        return `/assets/img/blog/${thumb}`;
    };

    const isDirectusUrl = (src: string) => src.startsWith('http');

    return (
        <>
            <div className="blog-area home-blog default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t("latestNews.subTitle")}</h5>
                                <h2 className="title">{t("latestNews.title")}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {isLoading ? (
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>{t("latestNews.loading")}</p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>{t("latestNews.error")}</p>
                            </div>
                        </div>
                    ) : articles.length === 0 ? (
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>{t("latestNews.noPosts")}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {featuredArticle && (
                                <div className="col-xl-6 col-md-12 mb-30">
                                    <div className="blog-style-one">
                                        <div className="thumb">
                                            <Image 
                                                src={getImageSrc(featuredArticle.thumbFull || featuredArticle.thumb)} 
                                                alt={featuredArticle.title} 
                                                className="h-auto" 
                                                width={900} 
                                                height={600}
                                                unoptimized={isDirectusUrl(getImageSrc(featuredArticle.thumbFull || featuredArticle.thumb))}
                                            />
                                            <div className="overlay text-light">
                                                <h3 className="post-title">
                                                    <Link href={`/blog-single-with-sidebar/${featuredArticle.id}`}>
                                                        {featuredArticle.title}
                                                    </Link>
                                                </h3>
                                                <p>
                                                    {featuredArticle.description || featuredArticle.title}
                                                </p>
                                                <Link href={`/blog-single-with-sidebar/${featuredArticle.id}`} className="button-regular">
                                                    {t("latestNews.continueReading")} <i className="fas fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {otherArticles.map(blog => (
                                <div className="col-xl-3 col-md-6 mb-30" key={blog.id}>
                                    <SingleBlogV1 blog={blog} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogV1;