"use client";
import { useTranslations } from "next-intl";
import CustomPoliciesServiceV1 from "./CustomPoliciesServiceV1";
import CustomPoliciesTestimonial from "./CustomPoliciesTestimonial";
import CustomPoliciesWhyChooseV3 from "./CustomPoliciesWhyChooseV3";

const PoliciesStrategiesContent = () => {
  const t = useTranslations("PoliciesStrategies");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Policies Service V1 Section */}
      <CustomPoliciesServiceV1 />

      {/* Testimonial Section */}
      <CustomPoliciesTestimonial />

      {/* Why Choose V3 Section */}
      <CustomPoliciesWhyChooseV3 />
    </>
  );
};

export default PoliciesStrategiesContent;
