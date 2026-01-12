"use client";
import { useTranslations } from "next-intl";
import SingleFeatureV2 from "@/components/feature/SingleFeatureV2";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const UNProgramsFeatures = () => {
  const t = useTranslations("UNProgramsProjects");
  const [isOpen, setOpen] = useState(false);

  const partnerships = [
    {
      id: 1,
      featureData: [
        {
          id: 1,
          thumb: "9.png",
          title: t("partnerships.partnership1.title")
        },
        {
          id: 2,
          thumb: "10.png",
          title: t("partnerships.partnership2.title")
        }
      ]
    },
    {
      id: 2,
      featureData: [
        {
          id: 3,
          thumb: "11.png",
          title: t("partnerships.partnership3.title")
        },
        {
          id: 4,
          thumb: "12.png",
          title: t("partnerships.partnership4.title")
        }
      ]
    }
  ];

  return (
    <>
      <div className="feature-style-two-area default-padding-top bg-gray">
        <div className="container">
          <div className="feature-style-two-items">
            <div className="feature-style-two info text-light bg-dark" style={{ backgroundImage: 'url(/assets/img/shape/19.png)' }}>
              <div className="info">
                <h4 className="sub-title">{t("subTitle")}</h4>
                <h2 className="title mb-25">{t("title")}</h2>
                <p>{t("description")}</p>
                <div className="button">
                  <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube text-play-button mt-20">
                    <div className="effect" />
                    <span><i className="fas fa-play" /> {t("impact.title")}</span>
                  </Link>
                </div>
              </div>
            </div>
            {partnerships.map((partnership) => (
              <SingleFeatureV2 feature={partnership} key={partnership.id} />
            ))}
          </div>
        </div>
      </div>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
    </>
  );
};

export default UNProgramsFeatures;
