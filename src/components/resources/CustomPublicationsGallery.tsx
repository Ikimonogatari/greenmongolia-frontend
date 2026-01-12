"use client";
import { useTranslations } from "next-intl";
import GalleryV2 from "@/components/gallery/GalleryV2";

const CustomPublicationsGallery = () => {
  const t = useTranslations("GMHPublications");

  return (
    <>
      <GalleryV2 />
    </>
  );
};

export default CustomPublicationsGallery;
