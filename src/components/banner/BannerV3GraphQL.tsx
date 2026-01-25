"use client";
import { getDirectusImageUrl, getTranslation, useGetHomeSlidersQuery } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerV3GraphQL = () => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: slidersData, isLoading, error } = useGetHomeSlidersQuery();
    
    // Filter published sliders and sort by sort field
    const sliders = slidersData
        ?.filter(item => item.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];

    if (isLoading) {
        return (
            <div className="banner-area navigation-circle text-light banner-style-three zoom-effect overflow-hidden" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (error || sliders.length === 0) {
        // Fallback to default banner if no data
        return (
            <div className="banner-area navigation-circle text-light banner-style-three zoom-effect overflow-hidden">
                <div className="banner-slide" style={{ backgroundImage: 'url(/assets/img/banner/default-banner.jpg)' }}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-7">
                                <div className="content">
                                    <h2 className="title">Green Mongolia Hub</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="banner-area navigation-circle text-light banner-style-three zoom-effect overflow-hidden">
            <Swiper 
                className="banner-fade"
                direction={"horizontal"}
                loop={true}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.banner-pagination',
                    type: 'bullets',
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
            >
                {sliders.map(slider => {
                    const translation = getTranslation(slider.translations, languageCode);
                    const imageUrl = getDirectusImageUrl(slider.image);
                    
                    return (
                        <SwiperSlide key={slider.id}>
                            <div 
                                className="banner-slide" 
                                style={{ 
                                    backgroundImage: imageUrl ? `url(${imageUrl})` : 'url(/assets/img/banner/default-banner.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '600px'
                                }}
                            >
                                <div className="container">
                                    <div className="row align-center">
                                        <div className="col-xl-7">
                                            <div className="content">
                                                {translation?.title && (
                                                    <h2 className="title" data-animation="fadeInUp" data-delay="0.5s">
                                                        {translation.title}
                                                    </h2>
                                                )}
                                                {translation?.slogan && (
                                                    <p className="description" data-animation="fadeInUp" data-delay="0.7s">
                                                        {translation.slogan}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
                {/* Navigation */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </Swiper>
        </div>
    );
};

export default BannerV3GraphQL;
