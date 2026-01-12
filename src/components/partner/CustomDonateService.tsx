"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CustomDonateService = () => {
  const t = useTranslations("Donate");

  const donationOptions = [
    {
      id: 1,
      title: t("giveOnce"),
      description: t("giveOnceDesc"),
      image: "1.png",
      link: "https://onetreeplanted.org/products/plant-trees?g_adtype=&g_network=g&g_keyword=tree%20planting%20charity&g_placement=&g_campaignid=22826629190&g_adid=765695211320&g_merchantid=&g_ifcreative=&g_locphysical=1010217&g_source={sourceid}&g_keywordid=kwd-26239"
    },
    {
      id: 2,
      title: t("giveMonthly"),
      description: t("giveMonthlyDesc"),
      image: "2.png",
      link: "https://onetreeplanted.org/products/plant-trees?g_adtype=&g_network=g&g_keyword=tree%20planting%20charity&g_placement=&g_campaignid=22826629190&g_adid=765695211320&g_merchantid=&g_ifcreative=&g_locphysical=1010217&g_source={sourceid}&g_keywordid=kwd-26239"
    },
    {
      id: 3,
      title: t("institutionalSupport"),
      description: t("institutionalSupportDesc"),
      image: "3.png",
      link: "/contact"
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
                <p>{t("subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {donationOptions.map((option) => (
              <div className="col-lg-4 col-md-6 service-one-single" key={option.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${option.image}`} 
                      alt={option.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {option.title.split(" ")[0]} <span>{option.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{option.description}</p>
                    <Link 
                      href={option.link}
                      target={option.link.startsWith("http") ? "_blank" : undefined}
                      rel={option.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="btn btn-theme mt-20 btn-md radius animation"
                    >
                      {option.id === 3 ? t("partnerWithUs") : t("donateNow")}
                    </Link>
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

export default CustomDonateService;
