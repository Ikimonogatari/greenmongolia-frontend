"use client";
import { useTranslations } from "next-intl";
import CustomToolsMethodsFeatures from "./CustomToolsMethodsFeatures";
import CustomToolsMethodsService from "./CustomToolsMethodsService";
import CustomToolsMethodsWhyChoose from "./CustomToolsMethodsWhyChoose";

const GMHToolsMethodsContent = () => {
  const t = useTranslations("GMHToolsMethods");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Features Section */}
      <CustomToolsMethodsFeatures />

      {/* Service Section */}
      <CustomToolsMethodsService />

      {/* Why Choose Section */}
      <CustomToolsMethodsWhyChoose />
    </>
  );
};

export default GMHToolsMethodsContent;
