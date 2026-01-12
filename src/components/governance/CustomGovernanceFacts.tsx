"use client";
import { useTranslations } from "next-intl";
import FactV2 from "@/components/fact/FactV2";
import Image from "next/image";

const CustomGovernanceFacts = () => {
  const t = useTranslations("Governance");

  const facts = [
    {
      id: 1,
      value: 95,
      unit: "%",
      label: t("financialManagement.title")
    },
    {
      id: 2,
      value: 90,
      unit: "%",
      label: t("technicalCapacity.title")
    },
    {
      id: 3,
      value: 88,
      unit: "%",
      label: t("mel.title")
    },
    {
      id: 4,
      value: 92,
      unit: "%",
      label: t("environmentalSocial.title")
    }
  ];

  return (
    <>
      <div className="fun-fact-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/14.png)' }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-md-50 mb-xs-50">
              <div className="fun-fact-thumb">
                <Image src="/assets/img/illustration/9.png" alt="Image Not Found" className="w-100" width={575} height={360} />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7 col-md-12 col-sm-12">
              <div className="fun-fact-items">
                <h2 className="title mb-40">{t("organizationalModel.title")}</h2>
                <p className="mb-40">{t("organizationalModel.description")}</p>
                <div className="row">
                  {facts.map((fact) => (
                    <div className="col-md-6 col-sm-6 col-xs-12 item mb-xs-30" key={fact.id}>
                      <FactV2 fact={fact} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomGovernanceFacts;
