"use client";
import { useTranslations } from "next-intl";
import FactV2 from "@/components/fact/FactV2";

const ProjectStats = () => {
  const t = useTranslations("GMHProgramsProjects");

  const stats = [
    {
      id: 1,
      value: 5,
      unit: "+",
      label: t("ongoingProjects.title")
    },
    {
      id: 2,
      value: 10,
      unit: "+",
      label: t("completedProjects.title")
    },
    {
      id: 3,
      value: 15,
      unit: "+",
      label: t("capacityBuilding.title")
    },
    {
      id: 4,
      value: 8,
      unit: "+",
      label: t("climateTechnologies.title")
    }
  ];

  return (
    <>
      <div className="fact-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            {stats.map((stat) => (
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={stat.id}>
                <FactV2 fact={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStats;
