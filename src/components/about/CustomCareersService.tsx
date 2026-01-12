"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomCareersService = () => {
  const t = useTranslations("Careers");

  const positions = [
    {
      id: 1,
      title: t("positions.position1.title"),
      description: t("positions.position1.description"),
      image: "1.png"
    },
    {
      id: 2,
      title: t("positions.position2.title"),
      description: t("positions.position2.description"),
      image: "2.png"
    },
    {
      id: 3,
      title: t("positions.position3.title"),
      description: t("positions.position3.description"),
      image: "3.png"
    },
    {
      id: 4,
      title: t("positions.position4.title"),
      description: t("positions.position4.description"),
      image: "4.png"
    }
  ];

  return (
    <>
      <div className="services-style-one-area bg-gray default-padding bottom-less">
        <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t("openPositions")}</h5>
                <h2 className="title">{t("openPositions")}</h2>
                <p>{t("positionsDescription")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {positions.map((position) => (
              <div className="col-lg-3 col-md-6 service-one-single" key={position.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${position.image}`} 
                      alt={position.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {position.title.split(" ")[0]} <span>{position.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{position.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCareersService;
