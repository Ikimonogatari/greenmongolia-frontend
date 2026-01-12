"use client";
import { useTranslations } from "next-intl";
import SingleFeatureV1 from "@/components/feature/SingleFeatureV1";
import Image from "next/image";
import Link from "next/link";

const CustomGovernanceFeatures = () => {
  const t = useTranslations("Governance");

  const features = [
    {
      id: 1,
      title: t("organizationalModel.title"),
      description: t("organizationalModel.description"),
      thumb: "1.png"
    },
    {
      id: 2,
      title: t("boardOfDirectors.title"),
      description: t("boardOfDirectors.description"),
      thumb: "2.png"
    },
    {
      id: 3,
      title: t("managementCapacity.title"),
      description: t("managementCapacity.description"),
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
                <h2 className="title">{t("organizationalModel.title")}</h2>
                <p>{t("organizationalModel.description")}</p>
                <ul className="item-list">
                  <li>{t("organizationalModel.advantage1")}</li>
                  <li>{t("organizationalModel.advantage2")}</li>
                  <li>{t("organizationalModel.advantage3")}</li>
                </ul>
                <Link className="btn btn-theme mt-30 btn-md radius animation" href="/governance/gmh-board">
                  {t("boardOfDirectors.title")}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Featured Products Section - Row Layout */}
          <div className="row mt-60 mt-md-40 mt-xs-40">
            <div className="col-lg-12">
              <div className="featured-products-row">
                {features.map((feature) => (
                  <div key={feature.id} className="featured-product-card">
                    <div className="thumb">
                      <Image src={`/assets/img/icon/${feature.thumb}`} alt={feature.title} width={64} height={64} />
                    </div>
                    <div className="info">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
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

export default CustomGovernanceFeatures;
