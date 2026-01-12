"use client";
import { useTranslations } from "next-intl";
import ServiceV1 from "@/components/services/ServiceV1";

const CustomToolsMethodsService = () => {
  const t = useTranslations("GMHToolsMethods");

  return (
    <>
      <ServiceV1 hasTitle={false} />
    </>
  );
};

export default CustomToolsMethodsService;
