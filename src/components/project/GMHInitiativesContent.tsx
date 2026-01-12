"use client";
import { useTranslations } from "next-intl";
import GalleryV2 from "@/components/gallery/GalleryV2";
import KubuqiFeatures from "./KubuqiFeatures";
import KubuqiTimeline from "./KubuqiTimeline";
import CustomWhyChooseV4 from "./CustomWhyChooseV4";

const GMHInitiativesContent = () => {
  const t = useTranslations("GMHInitiatives");

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV2 />

      {/* Kubuqi Model Features */}
      <KubuqiFeatures />

      {/* Project Phases Timeline */}
      <KubuqiTimeline />

      {/* Why Choose Section */}
      <CustomWhyChooseV4 />
    </>
  );
};

export default GMHInitiativesContent;
