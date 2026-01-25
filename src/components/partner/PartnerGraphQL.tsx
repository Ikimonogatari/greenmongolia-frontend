"use client";
import { useGetPartnersQuery, getDirectusImageUrl } from "@/store/api/directusApi";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const PartnerGraphQL = () => {
    const { data: partnersData, isLoading, error } = useGetPartnersQuery();

    // Filter and process partners
    const partners = partnersData
        ?.filter(partner => partner.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];
    
    // Note: Partner filtering by type can be added when the partner_type field is available in the API

    if (isLoading) {
        return (
            <div className="brand-style-two-area text-center bg-gray default-padding">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading partners...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || partners.length === 0) {
        return null;
    }

    return (
        <>
            <div className="brand-style-two-area text-center bg-gray default-padding">
                <div className="container">
                    <div className="brand-style-two">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper
                                    className="brand5col"
                                    modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                    loop={partners.length > 5}
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                            spaceBetween: 60,
                                        },
                                        1199: {
                                            slidesPerView: 5,
                                            spaceBetween: 60,
                                        }
                                    }}
                                >
                                    {partners.map(partner => {
                                        const logoUrl = getDirectusImageUrl(partner.partner_logo);
                                        return (
                                            <SwiperSlide key={partner.id}>
                                                {logoUrl ? (
                                                    <Image 
                                                        src={logoUrl} 
                                                        alt={partner.translations[0]?.name || "Partner"} 
                                                        width={256} 
                                                        height={256}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                ) : (
                                                    <div style={{ width: 256, height: 256, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <span>No Logo</span>
                                                    </div>
                                                )}
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default PartnerGraphQL;
