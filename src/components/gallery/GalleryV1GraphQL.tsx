"use client";
import { getDirectusImageUrl, getTranslation, useGetProjectsQuery } from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const GalleryV1GraphQL = () => {
    const t = useTranslations("Home");
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: projectsData, isLoading, error } = useGetProjectsQuery();
    
    // Get published projects and sort by sort field
    const projects = projectsData
        ?.filter(item => item.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];

    if (isLoading) {
        return (
            <div className="gallery-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                                <h2 className="title">{t('gallery.title')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>{t('gallery.loading')}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || projects.length === 0) {
        return (
            <div className="gallery-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                                <h2 className="title">{t('gallery.title')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>{t('gallery.noProjects')}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="gallery-style-one-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="site-heading text-center">
                            <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                            <h2 className="title">{t('gallery.title')}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fill">
                <div className="row">
                    <Swiper
                        className="gallery-style-one-carousel"
                        loop={projects.length > 3}
                        freeMode={false}
                        grabCursor={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.project-pagination',
                            clickable: true,
                            type: 'bullets',
                        }}
                        breakpoints={{
                            991: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3,
                            }
                        }}
                        modules={[Keyboard, Autoplay, Pagination]}
                    >
                        {projects.map(project => {
                            const translation = getTranslation(project.translations, languageCode);
                            const imageUrl = getDirectusImageUrl(project.cover_image || project.image);
                            
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className="gallery-style-one">
                                        {imageUrl ? (
                                            <Image 
                                                src={imageUrl}
                                                alt={translation?.name || "Project"}
                                                width={800}
                                                height={900}
                                                className="w-auto"
                                                style={{ objectFit: 'cover' }}
                                                unoptimized={true}
                                            />
                                        ) : (
                                            <Image 
                                                src="/assets/img/projects/default.jpg"
                                                alt={translation?.name || "Project"}
                                                width={800}
                                                height={900}
                                                className="w-auto"
                                            />
                                        )}
                                        <div className="overlay">
                                            {project.start_date && (
                                                <p>
                                                    {new Date(project.start_date).toLocaleDateString(locale, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            )}
                                            <h4>
                                                <Link href={`/project-details/${project.id}`}>
                                                    {translation?.name || "Untitled Project"}
                                                </Link>
                                            </h4>
                                            {translation?.description && (
                                                <p style={{ fontSize: '14px', marginTop: '10px', lineHeight: '1.6' }}>
                                                    {translation.description.length > 100 
                                                        ? `${translation.description.substring(0, 100)}...`
                                                        : translation.description
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    {/* Explicit Pagination Container */}
                    <div className="project-pagination text-center mt-30"></div>
                </div>
            </div>
        </div>
    );
};

export default GalleryV1GraphQL;
