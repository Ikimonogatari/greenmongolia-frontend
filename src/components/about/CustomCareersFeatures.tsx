"use client";
import { useTranslations } from "next-intl";
import FeatureV3 from "@/components/feature/FeatureV3";

const CustomCareersFeatures = () => {
  const t = useTranslations("Careers");

  return (
    <>
      <FeatureV3 sectionClass="default-padding-top bg-gray" />
    </>
  );
};

export default CustomCareersFeatures;
