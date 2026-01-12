"use client";
import { useTranslations } from "next-intl";
import SingleFeatureV2 from "@/components/feature/SingleFeatureV2";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const CustomUNPartnersRecognition = () => {
  const t = useTranslations("UNPartners");
  const [isOpen, setOpen] = useState(false);

  const recognitions = [
    {
      id: 1,
      featureData: [
        {
          id: 1,
          thumb: "9.png",
          title: t("unccdAccredited")
        },
        {
          id: 2,
          thumb: "10.png",
          title: t("wocatMember")
        }
      ]
    },
    {
      id: 2,
      featureData: [
        {
          id: 3,
          thumb: "11.png",
          title: t("drynetMember")
        },
        {
          id: 4,
          thumb: "12.png",
          title: t("cop17Support")
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
                <h4 className="sub-title">{t("recognitionTitle")}</h4>
                <h2 className="title mb-25">{t("recognitionTitle")}</h2>
                <p>{t("contributionsDesc")}</p>
                <div className="button">
                  <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube text-play-button mt-20">
                    <div className="effect" />
                    <span><i className="fas fa-play" /> {t("keyContributions")}</span>
                  </Link>
                </div>
              </div>
            </div>
            {recognitions.map((recognition) => (
              <SingleFeatureV2 feature={recognition} key={recognition.id} />
            ))}
          </div>
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
    </>
  );
};

export default CustomUNPartnersRecognition;
