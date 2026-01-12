"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const CustomToolsMethodsFeatures = () => {
  const t = useTranslations("GMHToolsMethods");

  const tools = [
    {
      id: 1,
      title: t("tools.tool1.title"),
      description: t("tools.tool1.description"),
      thumb: "1.png"
    },
    {
      id: 2,
      title: t("tools.tool2.title"),
      description: t("tools.tool2.description"),
      thumb: "2.png"
    },
    {
      id: 3,
      title: t("tools.tool3.title"),
      description: t("tools.tool3.description"),
      thumb: "3.png"
    }
  ];

  return (
    <>
      <div className="feature-style-one-area default-padding" style={{ backgroundImage: 'url(/assets/img/shape/18.png)' }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-md-50 mb-xs-50">
              <div className="feature-style-one-item">
                <Image src="/assets/img/thumb/1.jpg" alt="Image Not Found" className="w-100" style={{ height: 'auto', objectFit: 'cover' }} width={800} height={1200} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pl-xl-50 pr-xl-50 pl-lg-30 pr-lg-30 pl-md-15 pr-md-15 pl-xs-15 pr-xs-15">
              <div className="feature-style-one-info">
                <h2 className="title">{t("title")}</h2>
                <p>{t("description")}</p>
                <ul className="item-list">
                  <li>{t("tools.tool1.title")}</li>
                  <li>{t("tools.tool2.title")}</li>
                  <li>{t("tools.tool3.title")}</li>
                </ul>
                <Link className="btn btn-theme mt-30 btn-md radius animation" href="/data-resources/gmh-data-resources">
                  {t("learnMore")}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Tools Row Layout */}
          <div className="row mt-60 mt-md-40 mt-xs-40">
            <div className="col-lg-12">
              <div className="featured-products-row">
                {tools.map((tool) => (
                  <div key={tool.id} className="featured-product-card">
                    <div className="thumb">
                      <Image src={`/assets/img/icon/${tool.thumb}`} alt={tool.title} width={64} height={64} />
                    </div>
                    <div className="info">
                      <h5>{tool.title}</h5>
                      <p>{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomToolsMethodsFeatures;
