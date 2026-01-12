"use client";
import { useTranslations } from "next-intl";
import CustomGovernanceFeatures from "./CustomGovernanceFeatures";
import CustomGovernanceFacts from "./CustomGovernanceFacts";
import CustomGovernanceTestimonial from "./CustomGovernanceTestimonial";

const GovernanceContent = () => {
  const t = useTranslations("Governance");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("organizationalModel.title")}</h5>
        <h2 className="title">{t("organizationalModel.title")}</h2>
        <p>{t("organizationalModel.description")}</p>
      </div>

      {/* Features Section */}
      <CustomGovernanceFeatures />

      {/* Facts Section */}
      <CustomGovernanceFacts />

      {/* Testimonial Section */}
      <CustomGovernanceTestimonial />
    </>
  );
};

export default GovernanceContent;
