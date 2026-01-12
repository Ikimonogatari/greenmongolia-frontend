"use client";
import GalleryV1 from "@/components/gallery/GalleryV1";
import UNProgramsFeatures from "./UNProgramsFeatures";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const UNProgramsProjectsContent = () => {

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV1 />

      {/* Features Section */}
      <UNProgramsFeatures />

      {/* Achievements Section */}
      <WhyChooseV1 sectionClass="default-padding" />
    </>
  );
};

export default UNProgramsProjectsContent;
