"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import { useGetTestimonialsQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import './TestimonialV1GraphQL.css';

const TestimonialV1GraphQL = () => {
    const t = useTranslations("Home");
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: testimonialsData, isLoading, error } = useGetTestimonialsQuery();
    
    // Filter published testimonials and sort by sort field
    const testimonials = testimonialsData
        ?.filter(item => item.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];

    if (isLoading) {
        return (
            <div className="testimonial-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/13.png)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-gray-600">{t('testimonials.loading')}</div>
            </div>
        );
    }

    if (error || testimonials.length === 0) {
        // Don't render the section if there are no testimonials
        return null;
    }

    return (
        <>
            <div className="testimonial-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/13.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="testimonial-heading">
                                <h2>{t('testimonials.title')}</h2>
                            </div>
                            <Swiper
                                className="testimonial-carousel testimonial-style-one"
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                modules={[Keyboard, Autoplay, EffectFade]}
                            >
                                {testimonials.map(testimonial => {
                                    const translation = getTranslation(testimonial.translations, languageCode);
                                    const imageUrl = getDirectusImageUrl(testimonial.image);
                                    
                                    return (
                                        <SwiperSlide key={testimonial.id}>
                                            <div className="testimonial-style-one">
                                                <div className="thumb">
                                                    {imageUrl ? (
                                                        <Image 
                                                            src={imageUrl} 
                                                            alt={translation?.name || "Testimonial"} 
                                                            fill
                                                            sizes="(max-width: 767px) 200px, (max-width: 991px) 300px, 400px"
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    ) : (
                                                        <Image 
                                                            src="/assets/img/farmers/1.jpg" 
                                                            alt="Default" 
                                                            fill
                                                            sizes="(max-width: 767px) 200px, (max-width: 991px) 300px, 400px"
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    )}
                                                </div>
                                                <div className="info">
                                                    <Image 
                                                        src="/assets/img/shape/20.png" 
                                                        alt="Quote" 
                                                        className="w-auto" 
                                                        width={400} 
                                                        height={400} 
                                                    />
                                                    {translation?.testimonial && (
                                                        <p>&ldquo;{translation.testimonial}&rdquo;</p>
                                                    )}
                                                    <div className="provider">
                                                        <div className="content">
                                                            {translation?.name && <h4>{translation.name}</h4>}
                                                            {translation?.position && <span>{translation.position}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1GraphQL;
