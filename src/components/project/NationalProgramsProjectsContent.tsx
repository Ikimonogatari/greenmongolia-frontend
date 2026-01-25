"use client";
import GalleryV2GraphQL from "@/components/gallery/GalleryV2GraphQL";
import NationalProgramsService from "./NationalProgramsService";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const NationalProgramsProjectsContent = () => {

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV2GraphQL />

      {/* Services Section */}
      <NationalProgramsService />

      {/* Achievements Section */}
      <WhyChooseV1 sectionClass="default-padding" />
    </>
  );
};

export default NationalProgramsProjectsContent;
