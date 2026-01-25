"use client";
import { useTranslations } from "next-intl";
import TeamV3GraphQL from "@/components/team/TeamV3GraphQL";
import CustomBoardWhyChooseV3 from "./CustomBoardWhyChooseV3";
import CustomBoardFeatureV2 from "./CustomBoardFeatureV2";

const GMHBoardContent = () => {
  const t = useTranslations("GMHBoard");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("boardOfDirectors.title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("introduction")}</p>
      </div>

      {/* Team Section */}
      <TeamV3GraphQL />

      {/* Why Choose V3 Section */}
      <CustomBoardWhyChooseV3 />

      {/* Feature V2 Section */}
      <CustomBoardFeatureV2 />
    </>
  );
};

export default GMHBoardContent;
