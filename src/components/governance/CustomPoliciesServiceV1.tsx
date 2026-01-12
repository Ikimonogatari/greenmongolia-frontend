"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomPoliciesServiceV1 = () => {
  const t = useTranslations("PoliciesStrategies");

  const policies = [
    {
      id: 1,
      title: t("financialPolicies.title"),
      description: t("financialPolicies.description"),
      image: "1.png"
    },
    {
      id: 2,
      title: t("environmentalSocialPolicies.title"),
      description: t("environmentalSocialPolicies.description"),
      image: "2.png"
    },
    {
      id: 3,
      title: t("strategicFramework.title"),
      description: t("strategicFramework.description"),
      image: "3.png"
    },
    {
      id: 4,
      title: t("compliance.title"),
      description: t("compliance.description"),
      image: "4.png"
    }
  ];

  return (
    <>
      <div className="services-style-one-area bg-gray default-padding bottom-less">
        <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
        <div className="container">
          <div className="row">
            {policies.map((policy) => (
              <div className="col-lg-3 col-md-6 service-one-single" key={policy.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${policy.image}`} 
                      alt={policy.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {policy.title.split(" ")[0]} <span>{policy.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{policy.description}</p>
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

export default CustomPoliciesServiceV1;
