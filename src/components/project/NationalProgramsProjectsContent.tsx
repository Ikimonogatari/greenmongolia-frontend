"use client";
import { useTranslations } from "next-intl";
import GalleryV2 from "@/components/gallery/GalleryV2";
import NationalProgramsService from "./NationalProgramsService";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const NationalProgramsProjectsContent = () => {
  const t = useTranslations("NationalProgramsProjects");

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
