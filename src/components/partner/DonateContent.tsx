"use client";
import { useTranslations } from "next-intl";
import CustomDonateService from "./CustomDonateService";
import CustomDonateImpact from "./CustomDonateImpact";
import FeatureV1 from "@/components/feature/FeatureV1";

const DonateContent = () => {
  const t = useTranslations("Donate");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>

      {/* Donation Options Service Section */}
      <CustomDonateService />

      {/* Impact Section */}
      <CustomDonateImpact />

      {/* Features Section */}
      <FeatureV1 />
    </>
  );
};

export default DonateContent;
