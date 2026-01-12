"use client";
import { useTranslations } from "next-intl";
import CustomPublicationsService from "./CustomPublicationsService";
import CustomPublicationsGallery from "./CustomPublicationsGallery";
import CustomPublicationsWhyChoose from "./CustomPublicationsWhyChoose";

const GMHPublicationsContent = () => {
  const t = useTranslations("GMHPublications");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Service Section */}
      <CustomPublicationsService />

      {/* Gallery Section */}
      <CustomPublicationsGallery />

      {/* Why Choose Section */}
      <CustomPublicationsWhyChoose />
    </>
  );
};

export default GMHPublicationsContent;
