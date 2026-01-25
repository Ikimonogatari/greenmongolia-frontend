"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from "react";
import Pagination from 'react-paginate';
import { useGetEventsQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import SingleBlog2Column from "./SingleBlog2Column";

const Events3ColumnContent = () => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    const { data: eventsData, isLoading, error } = useGetEventsQuery();
    
    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get page from URL query
    const currentPageNumber = Number(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    // Transform events to blog format
    const events = useMemo(() => {
        if (!eventsData) return [];
        
        return eventsData
            .filter(event => event.status === "published")
            .sort((a, b) => {
                const dateA = new Date(a.start_date || a.date_created || 0).getTime();
                const dateB = new Date(b.start_date || b.date_created || 0).getTime();
                return dateB - dateA;
            })
            .map(event => {
                const translation = getTranslation(event.translations, languageCode);
                const imageUrl = getDirectusImageUrl(event.image);
                
                // Format date
                let dateObj: Date;
                if (event.start_date) {
                    dateObj = new Date(event.start_date);
                } else {
                    dateObj = new Date();
                }
                
                return {
                    id: parseInt(event.id) || 0,
                    thumb: imageUrl || "/assets/img/blog/6.jpg",
                    title: translation?.name || "Event",
                    date: {
                        day: dateObj.getDate().toString().padStart(2, '0'),
                        month: dateObj.toLocaleString("en-US", { month: 'short' }),
                        year: dateObj.getFullYear().toString(),
                    },
                    description: translation?.description || "",
                    category: "Event",
                    author: "Admin",
                    comments: 0,
                };
            });
    }, [eventsData, languageCode, locale]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEvents = events.slice(startIndex, endIndex);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/news/events?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(events.length / itemsPerPage);

    // Loading state
    if (isLoading) {
        return (
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading events...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="alert alert-danger">
                        <h4>Error Loading Events</h4>
                        <p>Unable to fetch events from the API.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Empty state
    if (events.length === 0) {
        return (
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="alert alert-info">
                        <h4>No Events Found</h4>
                        <p>There are no events available at the moment.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {currentEvents.map(event =>
                                <div className="col-xl-4 col-md-6 single-item" key={event.id}>
                                    <SingleBlog2Column blog={event} />
                                </div>
                            )}
                        </div>
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
        </>
    );
};

export default Events3ColumnContent;
