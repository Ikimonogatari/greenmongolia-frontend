"use client";
import { useTranslations } from "next-intl";
import SingleFeatureV2 from "@/components/feature/SingleFeatureV2";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const KubuqiFeatures = () => {
  const t = useTranslations("GMHInitiatives");
  const [isOpen, setOpen] = useState(false);

  const pillars = [
    {
      id: 1,
      featureData: [
        {
          id: 1,
          thumb: "9.png",
          title: t("kubuqiModel.pillars.pillar1.title")
        },
        {
          id: 2,
          thumb: "10.png",
          title: t("kubuqiModel.pillars.pillar2.title")
        }
      ]
    },
    {
      id: 2,
      featureData: [
        {
          id: 3,
          thumb: "11.png",
          title: t("kubuqiModel.pillars.pillar3.title")
        },
        {
          id: 4,
          thumb: "12.png",
          title: t("agrivoltaics.title")
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
                <h2 className="title mb-25">{t("kubuqiModel.title")}</h2>
                <p>{t("kubuqiModel.description")}</p>
                <div className="button">
                  <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube text-play-button mt-20">
                    <div className="effect" />
                    <span><i className="fas fa-play" /> {t("vision.title")}</span>
                  </Link>
                </div>
              </div>
            </div>
            {pillars.map((pillar) => (
              <SingleFeatureV2 feature={pillar} key={pillar.id} />
            ))}
          </div>
        </div>
      </div>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
    </>
  );
};

export default KubuqiFeatures;
