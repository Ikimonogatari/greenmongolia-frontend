"use client";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";
import { useTranslations } from "next-intl";
import CustomUNPartnersRecognition from "./CustomUNPartnersRecognition";
import CustomUNPartnersService from "./CustomUNPartnersService";

const UNPartnersContent = () => {
  const t = useTranslations("UNPartners");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("lead")}</p>
      </div>

      {/* Partners Service Section */}
      <CustomUNPartnersService />

      {/* Recognition Features Section */}
      <CustomUNPartnersRecognition />

      {/* Why Choose Section */}
      <WhyChooseV1 sectionClass="default-padding" />
    </>
  );
};

export default UNPartnersContent;
