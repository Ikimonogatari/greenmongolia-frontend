"use client";
import { useTranslations } from "next-intl";
import TeamV3GraphQL from "@/components/team/TeamV3GraphQL";
import CustomBoardAdvisorsFeatures from "./CustomBoardAdvisorsFeatures";
import CustomBoardAdvisorsWhyChoose from "./CustomBoardAdvisorsWhyChoose";

const BoardOfAdvisorsContent = () => {
  const t = useTranslations("BoardOfAdvisors");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Team Section */}
      <TeamV3GraphQL />

      {/* Features Section */}
      <CustomBoardAdvisorsFeatures />

      {/* Why Choose Section */}
      <CustomBoardAdvisorsWhyChoose />
    </>
  );
};

export default BoardOfAdvisorsContent;
