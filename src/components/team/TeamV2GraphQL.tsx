"use client";
import { useGetCouncilMembersQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const TeamV2GraphQL = () => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    const { data: membersData, isLoading, error } = useGetCouncilMembersQuery();

    // Filter and sort council members
    const members = membersData
        ?.filter(member => member.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0))
        ?.slice(0, 6) || [];

    if (isLoading) {
        return (
            <div className="team-style-one-area default-padding-bottom pt-md-120">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading team members...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || members.length === 0) {
        return null;
    }

    return (
        <>
            <div className="team-style-one-area default-padding-bottom pt-md-120">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <h4 className="sub-title">Our Team</h4>
                            <h2 className="title">Meet our board members</h2>
                            <Link className="btn btn-theme secondary mt-10 btn-md radius animation" href="/board-of-advisors">Meet all Members</Link>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <Swiper
                                className="team-style-one-carousel"
                                loop={members.length > 2}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    }
                                }}
                                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                            >
                                {members.slice(0, 3).map(member => {
                                    const translation = getTranslation(member.translations, languageCode);
                                    const photoUrl = getDirectusImageUrl(member.photo);
                                    const fullName = translation 
                                        ? `${translation.first_name || ""} ${translation.last_name || ""}`.trim()
                                        : "Team Member";
                                    
                                    return (
                                        <SwiperSlide key={member.id}>
                                            <div className="farmer-style-one-item">
                                                <div className="thumb">
                                                    {photoUrl ? (
                                                        <Image
                                                            src={photoUrl}
                                                            alt={fullName}
                                                            width={800}
                                                            height={800}
                                                            className="h-auto"
                                                            style={{ objectFit: 'cover' }}
                                                            unoptimized={true}
                                                        />
                                                    ) : (
                                                        <Image
                                                            src="/assets/img/farmers/1.jpg"
                                                            alt={fullName}
                                                            width={800}
                                                            height={800}
                                                            className="h-auto"
                                                        />
                                                    )}
                                                    {member.email && (
                                                        <div className="social">
                                                            <a href={`mailto:${member.email}`}>
                                                                <i className="fas fa-envelope"></i>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="info">
                                                    {translation?.role && <span>{translation.role}</span>}
                                                    <h4>
                                                        <Link href="#">{fullName}</Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TeamV2GraphQL;
