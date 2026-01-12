"use client";
import { useTranslations } from "next-intl";
import GalleryV1 from "@/components/gallery/GalleryV1";
import ProjectCategoriesService from "./ProjectCategoriesService";
import ProjectStats from "./ProjectStats";
import CustomWhyChooseV2 from "./CustomWhyChooseV2";

const GMHProgramsProjectsContent = () => {
  const t = useTranslations("GMHProgramsProjects");

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV1 />

      {/* Project Categories as Services */}
      <ProjectCategoriesService />

      {/* Stats Section */}
      <ProjectStats />

      {/* Why Choose Section with Facts */}
      <CustomWhyChooseV2 />
    </>
  );
};

export default GMHProgramsProjectsContent;
