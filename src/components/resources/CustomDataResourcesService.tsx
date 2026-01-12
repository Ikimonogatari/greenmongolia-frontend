"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomDataResourcesService = () => {
  const t = useTranslations("GMHDataResources");

  const platforms = [
    {
      id: 1,
      title: t("platforms.platform1.title"),
      description: t("platforms.platform1.description"),
      image: "1.png"
    },
    {
      id: 2,
      title: t("platforms.platform2.title"),
      description: t("platforms.platform2.description"),
      image: "2.png"
    },
    {
      id: 3,
      title: t("platforms.platform3.title"),
      description: t("platforms.platform3.description"),
      image: "3.png"
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
                <h5 className="sub-title">{t("platforms.title")}</h5>
                <h2 className="title">{t("platforms.title")}</h2>
                <p>{t("platforms.description")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {platforms.map((platform) => (
              <div className="col-lg-4 col-md-6 service-one-single" key={platform.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${platform.image}`} 
                      alt={platform.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {platform.title.split(" ")[0]} <span>{platform.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{platform.description}</p>
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

export default CustomDataResourcesService;
