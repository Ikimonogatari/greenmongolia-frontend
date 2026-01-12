"use client";
import GalleryV2 from "@/components/gallery/GalleryV2";
import NationalProgramsService from "./NationalProgramsService";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const NationalProgramsProjectsContent = () => {

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV2 />

      {/* Services Section */}
      <NationalProgramsService />

      {/* Achievements Section */}
      <WhyChooseV1 sectionClass="default-padding" />
    </>
  );
};

export default NationalProgramsProjectsContent;
