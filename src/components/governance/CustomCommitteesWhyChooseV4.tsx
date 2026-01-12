"use client";
import { useTranslations } from "next-intl";
import SingleChooseV4 from "@/components/whyChoose/SingleChooseV4";
import Image from "next/image";
import Counter from "@/components/counter/Counter";

const CustomCommitteesWhyChooseV4 = () => {
  const t = useTranslations("CommitteesPanels");

  const chooseList = [
    {
      id: 1,
      icon: "1.png",
      alt: t("technicalWorkingGroups.title"),
      title: t("technicalWorkingGroups.title"),
      description: t("technicalWorkingGroups.description")
    },
    {
      id: 2,
      icon: "2.png",
      alt: t("advisoryPanels.title"),
      title: t("advisoryPanels.title"),
      description: t("advisoryPanels.description")
    },
    {
      id: 3,
      icon: "3.png",
      alt: t("projectCommittees.title"),
      title: t("projectCommittees.title"),
      description: t("projectCommittees.description")
    },
    {
      id: 4,
      icon: "4.png",
      alt: t("communityGroups.title"),
      title: t("communityGroups.title"),
      description: t("communityGroups.description")
    }
  ];

  return (
    <>
      <div className="choose-us-style-four-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-3 col-lg-12">
              <div className="feature-style-three-item">
                <ul>
                  {chooseList.slice(0, 2).map((list) => (
                    <SingleChooseV4 list={list} key={list.id} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="thumb-style-three">
                <Image className="animate" data-animate="pulse" src="/assets/img/illustration/18.png" alt="Image Not Found" width={800} height={870} />
                <div className="ex-badge animated animate" data-animate="fadeInUp">
                  <Image src="/assets/img/shape/29.png" alt="Image Not Found" width={500} height={500} />
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer"><Counter end={37} /></div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">{t("title")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-12">
              <div className="feature-style-three-item text-end">
                <ul>
                  {chooseList.slice(2, 4).map((list) => (
                    <SingleChooseV4 list={list} key={list.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCommitteesWhyChooseV4;
