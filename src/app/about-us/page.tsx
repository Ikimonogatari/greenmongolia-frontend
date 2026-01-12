"use client";
import AboutContent from "@/components/about/AboutContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations("Breadcrumb");
  
  return (
    <>
      <LayoutV1>
        <BreadCrumb title={t("aboutUs")} breadCrumb={t("about")} />
        <AboutContent />
      </LayoutV1>
    </>
  );
}
