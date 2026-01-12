"use client";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";

const CustomPoliciesTestimonial = () => {
  const t = useTranslations("PoliciesStrategies");

  const testimonials = [
    {
      id: 1,
      name: t("financialPolicies.title"),
      designation: t("title"),
      description: t("financialPolicies.description"),
      thumb: "1.jpg"
    },
    {
      id: 2,
      name: t("environmentalSocialPolicies.title"),
      designation: t("title"),
      description: t("environmentalSocialPolicies.description"),
      thumb: "2.jpg"
    },
    {
      id: 3,
      name: t("strategicFramework.title"),
      designation: t("title"),
      description: t("strategicFramework.description"),
      thumb: "3.jpg"
    }
  ];

  return (
    <>
      <div className="testimonial-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/13.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="testimonial-heading">
                <h2>{t("title")}</h2>
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
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-style-one-item">
                      <div className="thumb">
                        <Image src={`/assets/img/team/${testimonial.thumb}`} alt={testimonial.name} width={100} height={100} />
                      </div>
                      <div className="info">
                        <p>{testimonial.description}</p>
                        <div className="meta">
                          <h5>{testimonial.name}</h5>
                          <span>{testimonial.designation}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPoliciesTestimonial;
