"use client";
import GalleryV2 from "@/components/gallery/GalleryV2";
import KubuqiFeatures from "./KubuqiFeatures";
import KubuqiTimeline from "./KubuqiTimeline";
import CustomWhyChooseV4 from "./CustomWhyChooseV4";

const GMHInitiativesContent = () => {

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
