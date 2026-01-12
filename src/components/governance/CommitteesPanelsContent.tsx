"use client";
import { useTranslations } from "next-intl";
import CustomCommitteesServiceV2 from "./CustomCommitteesServiceV2";
import CustomCommitteesFacts from "./CustomCommitteesFacts";
import CustomCommitteesWhyChooseV4 from "./CustomCommitteesWhyChooseV4";

const CommitteesPanelsContent = () => {
  const t = useTranslations("CommitteesPanels");

  return (
    <>
      {/* Main Heading */}
      <div className="site-heading text-center default-padding-top">
        <h5 className="sub-title">{t("title")}</h5>
        <h2 className="title">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Committees Service V2 Section */}
      <CustomCommitteesServiceV2 />

      {/* Facts Section */}
      <CustomCommitteesFacts />

      {/* Why Choose V4 Section */}
      <CustomCommitteesWhyChooseV4 />
    </>
  );
};

export default CommitteesPanelsContent;
