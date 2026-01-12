"use client";
import { useTranslations } from "next-intl";
import FactV2 from "@/components/fact/FactV2";

const CustomAboutFacts = () => {
  const t = useTranslations("About");

  const facts = [
    {
      id: 1,
      value: 2024,
      unit: "",
      label: t("facts.fact1")
    },
    {
      id: 2,
      value: 3,
      unit: "+",
      label: t("facts.fact2")
    },
    {
      id: 3,
      value: 10,
      unit: "+",
      label: t("facts.fact3")
    },
    {
      id: 4,
      value: 100,
      unit: "+",
      label: t("facts.fact4")
    }
  ];

  return (
    <>
      <div className="fun-fact-area default-padding bg-gray" style={{ backgroundImage: 'url(/assets/img/shape/14.png)' }}>
        <div className="container">
          <div className="row">
            {facts.map((fact) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 item mb-md-30 mb-xs-30" key={fact.id}>
                <FactV2 fact={fact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAboutFacts;
