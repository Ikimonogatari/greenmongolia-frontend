"use client";
import GalleryV1GraphQL from "@/components/gallery/GalleryV1GraphQL";
import ProjectCategoriesService from "./ProjectCategoriesService";
import ProjectStats from "./ProjectStats";
import CustomWhyChooseV2 from "./CustomWhyChooseV2";

const GMHProgramsProjectsContent = () => {

  return (
    <>
      {/* Projects Gallery Section */}
      <GalleryV1GraphQL />

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
