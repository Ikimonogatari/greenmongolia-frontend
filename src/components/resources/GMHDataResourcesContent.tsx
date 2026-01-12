"use client";
import { useTranslations } from "next-intl";
import CustomDataResourcesService from "./CustomDataResourcesService";
import CustomDataResourcesFeatures from "./CustomDataResourcesFeatures";
import CustomDataResourcesWhyChoose from "./CustomDataResourcesWhyChoose";

const GMHDataResourcesContent = () => {
  const t = useTranslations("GMHDataResources");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Service Section */}
      <CustomDataResourcesService />

      {/* Features Section */}
      <CustomDataResourcesFeatures />

      {/* Why Choose Section */}
      <CustomDataResourcesWhyChoose />
    </>
  );
};

export default GMHDataResourcesContent;
