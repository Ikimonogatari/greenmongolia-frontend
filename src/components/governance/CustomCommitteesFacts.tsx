"use client";
import { useTranslations } from "next-intl";
import FactV2 from "@/components/fact/FactV2";

const CustomCommitteesFacts = () => {
  const t = useTranslations("CommitteesPanels");

  const facts = [
    {
      id: 1,
      value: 4,
      unit: "+",
      label: t("technicalWorkingGroups.title")
    },
    {
      id: 2,
      value: 10,
      unit: "+",
      label: t("advisoryPanels.title")
    },
    {
      id: 3,
      value: 8,
      unit: "+",
      label: t("projectCommittees.title")
    },
    {
      id: 4,
      value: 15,
      unit: "+",
      label: t("communityGroups.title")
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

export default CustomCommitteesFacts;
