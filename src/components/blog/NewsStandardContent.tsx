"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from "react";
import Pagination from 'react-paginate';
import { useGetNewsQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import SingleBlogContentV1 from './SingleBlogContentV1';

const NewsStandardContent = () => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    const { data: newsData, error, isLoading } = useGetNewsQuery();

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get page from URL query
    const currentPageNumber = Number(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    // Transform news to blog format
    const blogArticles = useMemo(() => {
        if (!newsData) return [];
        
        return newsData
            .filter(item => item.status === "published")
            .sort((a, b) => {
                const dateA = new Date(a.date_created || 0).getTime();
                const dateB = new Date(b.date_created || 0).getTime();
                return dateB - dateA;
            })
            .map(article => {
                const translation = getTranslation(article.translations, languageCode);
                const imageUrl = getDirectusImageUrl(article.image || article.cover_image);
                
                // Format date
                let dateInfo = { day: "01", month: "Jan", year: "2024" };
                if (article.date_created) {
                    const date = new Date(article.date_created);
                    dateInfo = {
                        day: date.getDate().toString().padStart(2, '0'),
                        month: date.toLocaleString("en-US", { month: 'short' }),
                        year: date.getFullYear().toString(),
                    };
                }
                
                return {
                    id: parseInt(article.id) || 0,
                    thumb: imageUrl || "/assets/img/blog/6.jpg",
                    thumbFull: imageUrl || "/assets/img/blog/6.jpg",
                    title: translation?.title || "News Article",
                    date: dateInfo,
                    author: "Admin",
                    full_date: `${dateInfo.day} ${dateInfo.month}, ${dateInfo.year}`,
                    description: translation?.description?.substring(0, 200) || translation?.body?.substring(0, 200) || "",
                    comments: 0,
                };
            });
    }, [newsData, languageCode]);

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = blogArticles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(blogArticles.length / itemsPerPage);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/news/news-media?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading news articles...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="alert alert-danger">
                                <h4>Error Loading News</h4>
                                <p>Unable to fetch news articles from the API.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Empty state
    if (!blogArticles || blogArticles.length === 0) {
        return (
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="alert alert-info">
                                <h4>No News Found</h4>
                                <p>There are no news articles available at the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {currentBlogData.map(blog =>
                                    <SingleBlogContentV1 blog={blog} key={blog.id} />
                                )}
                            </div>

                            {/* Pagination */}
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <Pagination
                                        previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                        nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                        breakLabel={'...'}
                                        pageCount={totalPages}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination text-center'}
                                        activeClassName={'active'}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        previousLinkClassName={'page-link'}
                                        nextLinkClassName={'page-link'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsStandardContent;
