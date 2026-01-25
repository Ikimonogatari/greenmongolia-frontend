"use client";
import GalleryV1GraphQL from "@/components/gallery/GalleryV1GraphQL";
import WhyChooseV2 from "@/components/whyChoose/WhyChooseV2";
import { useTranslations } from "next-intl";
import CustomLocalPartnersService from "./CustomLocalPartnersService";

const LocalPartnersContent = () => {
  const t = useTranslations("LocalPartners");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("lead")}</p>
      </div>

      {/* Partners Service Section */}
      <CustomLocalPartnersService />

      {/* Gallery Section */}
      <GalleryV1GraphQL />

      {/* Why Choose Section */}
      <WhyChooseV2 />
    </>
  );
};

export default LocalPartnersContent;
