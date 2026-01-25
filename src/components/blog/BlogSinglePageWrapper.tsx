"use client";
import { useGetNewsByIdQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import BlogSingleWithSidebarContentGraphQL from "./BlogSingleWithSidebarContentGraphQL";

interface BlogSinglePageWrapperProps {
  newsId: string;
}

const BlogSinglePageWrapper = ({ newsId }: BlogSinglePageWrapperProps) => {
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";
  
  const { data: newsItem, isLoading } = useGetNewsByIdQuery(newsId);
  
  const translation = newsItem ? getTranslation(newsItem.translations, languageCode) : null;
  const coverImageUrl = newsItem ? getDirectusImageUrl(newsItem.cover_image || newsItem.image) : undefined;
  
  // Truncate title for breadcrumb (max 80 characters)
  const truncateTitle = (title: string, maxLength: number = 80) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength).trim() + "...";
  };
  
  const breadcrumbTitle = translation?.title 
    ? truncateTitle(translation.title, 80) 
    : "News Article";
  
  // Show loading breadcrumb while fetching
  if (isLoading) {
    return (
      <>
        <BreadCrumb title="Loading..." breadCrumb="news" />
        <BlogSingleWithSidebarContentGraphQL newsId={newsId} />
      </>
    );
  }
  
  return (
    <>
      <BreadCrumb 
        title={breadcrumbTitle} 
        breadCrumb="news" 
        backgroundImage={coverImageUrl}
        skipTitleTranslation={true}
      />
      <BlogSingleWithSidebarContentGraphQL newsId={newsId} />
    </>
  );
};

export default BlogSinglePageWrapper;
