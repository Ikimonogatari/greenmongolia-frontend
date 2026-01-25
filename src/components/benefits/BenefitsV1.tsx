"use client";
import { useTranslations } from "next-intl";
import LocalVideoBg from "../videos/LocalVideoBg";

const BenefitsV1 = () => {
  const t = useTranslations("Home-Benefits");
  
  return (
    <>
      <div
        className="benifits-area default-padding-top video-bg-live bg-cover mt--50 mt-md-0 mt-xs-0"
        style={{ backgroundImage: "url(/assets/img/banner/16.jpg)" }}
      >
        <LocalVideoBg videoURL="/assets/video/bgvideo.mp4" />
        <div
          className="shape-top-center"
          style={{ backgroundImage: "url(/assets/img/shape/10.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="benifit-items text-light">
                <h2 className="title">{t("title")}</h2>
                <p>{t("description")}</p>
                <ul className="list-standard">
                  <li>{t("benefit1")}</li>
                  <li>{t("benefit2")}</li>
                  <li>{t("benefit3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsV1;
