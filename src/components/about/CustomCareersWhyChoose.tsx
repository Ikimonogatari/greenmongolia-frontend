"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomCareersWhyChoose = () => {
  const t = useTranslations("Careers");

  const benefits = [
    t("benefits.benefit1"),
    t("benefits.benefit2"),
    t("benefits.benefit3"),
    t("benefits.benefit4")
  ];

  return (
    <>
      <div className="choose-us-style-three-area default-padding bg-dark text-light">
        <div className="illustration-bottom">
          <Image
            src="/assets/img/illustration/17.png"
            alt="Image Not Found"
            width={700}
            height={400}
          />
        </div>
        <div
          className="shape"
          style={{ backgroundImage: "url(/assets/img/about/3.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
              <h2 className="title">{t("whyJoin")}</h2>
              <p>{t("whyJoinDescription")}</p>
              <div className="list-grid">
                <ul className="list-item">
                  {benefits.map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCareersWhyChoose;
