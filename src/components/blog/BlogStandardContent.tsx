"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from "react";
import Pagination from 'react-paginate';
import { useGetArticlesQuery } from "@/store/api/articlesApi";
import { transformArticleToBlog } from "@/store/api/articlesApi";
import SingleBlogContentV1 from './SingleBlogContentV1';

const BlogStandardContent = () => {

    // RTK Query - Fetch articles from Directus
    const { data, error, isLoading, isFetching } = useGetArticlesQuery();

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

    // Transform articles from Directus format to blog format
    const blogArticles = useMemo(() => {
        if (!data?.data) return [];
        return data.data.map(transformArticleToBlog);
    }, [data]);

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = blogArticles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(blogArticles.length / itemsPerPage);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/blog-standard?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    // Loading state
    if (isLoading || isFetching) {
        return (
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading articles...</p>
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
                                <h4>Error Loading Articles</h4>
                                <p>Unable to fetch articles from the API. Please check your Directus connection.</p>
                                <p className="mb-0">
                                    <small>Error: {error && 'status' in error ? `Status ${error.status}` : 'Unknown error'}</small>
                                </p>
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
                                <h4>No Articles Found</h4>
                                <p>There are no articles available at the moment.</p>
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

export default BlogStandardContent;