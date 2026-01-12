"use client";
import { useTranslations } from "next-intl";
import GalleryV1 from "@/components/gallery/GalleryV1";
import UNProgramsFeatures from "./UNProgramsFeatures";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

const UNProgramsProjectsContent = () => {
  const t = useTranslations("UNProgramsProjects");

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
