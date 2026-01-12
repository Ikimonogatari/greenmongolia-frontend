"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomUNPartnersService = () => {
  const t = useTranslations("UNPartners");

  const partners = [
    {
      id: 1,
      title: t("title"),
      description: t("lead"),
      image: "1.png"
    },
    {
      id: 2,
      title: t("wocatTitle"),
      description: t("wocatDesc"),
      image: "2.png"
    },
    {
      id: 3,
      title: t("drynetTitle"),
      description: t("drynetDesc"),
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
                <h5 className="sub-title">{t("title")}</h5>
                <h2 className="title">{t("title")}</h2>
                <p>{t("lead")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {partners.map((partner) => (
              <div className="col-lg-4 col-md-6 service-one-single" key={partner.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${partner.image}`} 
                      alt={partner.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {partner.title.split(" ")[0]} <span>{partner.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{partner.description}</p>
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

export default CustomUNPartnersService;
