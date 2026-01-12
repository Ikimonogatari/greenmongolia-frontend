"use client";
import { useTranslations } from "next-intl";

const KubuqiTimeline = () => {
  const t = useTranslations("GMHInitiatives");

  const phases = [
    {
      id: 1,
      year: "2024",
      title: t("phases.initial.title")
    },
    {
      id: 2,
      year: "2025-2026",
      title: t("phases.scaleUp.title")
    }
  ];

  return (
    <>
      <div className="timeline-area default-padding" style={{ backgroundImage: 'url(/assets/img/shape/21.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t("phases.title")}</h5>
                <h2 className="title">{t("agrivoltaics.title")}</h2>
                <p>{t("agrivoltaics.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="timeline-items">
                {phases.map((phase) => (
                  <div className="timeline-item" key={phase.id}>
                    <h2>{phase.year}</h2>
                    <h4>{phase.title}</h4>
                    <p>{phase.id === 1 ? t("phases.initial.description") : t("phases.scaleUp.description")}</p>
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

export default KubuqiTimeline;
