"use client";
import { useTranslations } from "next-intl";
import SingleServiceV2 from "@/components/services/SingleServiceV2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

const CustomLocalPartnersService = () => {
  const t = useTranslations("LocalPartners");

  const partners = [
    {
      id: 1,
      title: t("title"),
      category: t("partnershipDetails"),
      thumb: "1.jpg",
      icon: "1.png"
    },
    {
      id: 2,
      title: t("giz"),
      category: t("otherPartners"),
      thumb: "2.jpg",
      icon: "2.png"
    },
    {
      id: 3,
      title: t("stream"),
      category: t("otherPartners"),
      thumb: "3.jpg",
      icon: "3.png"
    },
    {
      id: 4,
      title: t("forestry"),
      category: t("otherPartners"),
      thumb: "4.jpg",
      icon: "4.png"
    }
  ];

  return (
    <>
      <div className="service-style-two-area half-bg-dark-bottom default-padding-top pb-md-120 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="text-center mb-60 mb-md-40 mb-xs-40">
                <h2 className="mask-text large" style={{ backgroundImage: 'url(/assets/img/banner/18.jpg)' }}>
                  {t("title")}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="service-style-two-carousel mb--30"
                loop={true}
                freeMode={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                  }
                }}
                modules={[Navigation, Autoplay, Keyboard]}
              >
                {partners.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <SingleServiceV2 service={partner} />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomLocalPartnersService;
