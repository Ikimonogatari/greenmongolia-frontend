"use client";
import { useTranslations } from "next-intl";
import CustomPrivatePartnersFeatures from "./CustomPrivatePartnersFeatures";
import GalleryV2GraphQL from "@/components/gallery/GalleryV2GraphQL";
import WhyChooseV4 from "@/components/whyChoose/WhyChooseV4";

const PrivatePartnersContent = () => {
  const t = useTranslations("PrivatePartners");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("lead")}</p>
      </div>

      {/* Features Section */}
      <CustomPrivatePartnersFeatures />

      {/* Gallery Section */}
      <GalleryV2GraphQL />

      {/* Why Choose Section */}
      <WhyChooseV4 />
    </>
  );
};

export default PrivatePartnersContent;
