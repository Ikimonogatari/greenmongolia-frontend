"use client";
import { useTranslations } from "next-intl";
import CustomAboutFeatures from "./CustomAboutFeatures";
import CustomAboutWhyChoose from "./CustomAboutWhyChoose";
import CustomAboutFacts from "./CustomAboutFacts";

const AboutContent = () => {
  const t = useTranslations("About");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Features Section */}
      <CustomAboutFeatures />

      {/* Why Choose Section */}
      <CustomAboutWhyChoose />

      {/* Facts Section */}
      <CustomAboutFacts />
    </>
  );
};

export default AboutContent;
