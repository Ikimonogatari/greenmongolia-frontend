"use client";
import { useTranslations } from "next-intl";
import CustomCareersService from "./CustomCareersService";
import CustomCareersWhyChoose from "./CustomCareersWhyChoose";
import CustomCareersFeatures from "./CustomCareersFeatures";

const CareersContent = () => {
  const t = useTranslations("Careers");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Service Section */}
      <CustomCareersService />

      {/* Why Choose Section */}
      <CustomCareersWhyChoose />

      {/* Features Section */}
      <CustomCareersFeatures />
    </>
  );
};

export default CareersContent;
