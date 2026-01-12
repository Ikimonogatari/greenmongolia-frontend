"use client";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";

const CustomGovernanceTestimonial = () => {
  const t = useTranslations("Governance");

  const testimonials = [
    {
      id: 1,
      name: t("organizationalModel.title"),
      designation: t("organizationalModel.advantage1"),
      description: t("organizationalModel.description"),
      thumb: "1.jpg"
    },
    {
      id: 2,
      name: t("boardOfDirectors.title"),
      designation: t("boardOfDirectors.description"),
      description: t("managementCapacity.description"),
      thumb: "2.jpg"
    },
    {
      id: 3,
      name: t("financialManagement.title"),
      designation: t("financialManagement.description"),
      description: t("technicalCapacity.description"),
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
                <h2>{t("organizationalModel.title")}</h2>
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

export default CustomGovernanceTestimonial;
