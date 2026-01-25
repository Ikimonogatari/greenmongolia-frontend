"use client";
import GalleryV1GraphQL from "@/components/gallery/GalleryV1GraphQL";
import UNProgramsFeatures from "./UNProgramsFeatures";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const UNProgramsProjectsContent = () => {

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV1GraphQL />

      {/* Features Section */}
      <UNProgramsFeatures />

      {/* Achievements Section */}
      <WhyChooseV1 sectionClass="default-padding" />
    </>
  );
};

export default UNProgramsProjectsContent;
