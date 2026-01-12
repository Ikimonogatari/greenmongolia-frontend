"use client";
import { useTranslations } from "next-intl";
import ChooseListV2 from "@/components/whyChoose/ChooseListV2";
import FactV2 from "@/components/fact/FactV2";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const CustomWhyChooseV2 = () => {
  const t = useTranslations("GMHProgramsProjects");
  const [isOpen, setOpen] = useState(false);

  const chooseList = [
    {
      id: 1,
      title: t("ongoingProjects.title"),
      description: t("ongoingProjects.description")
    },
    {
      id: 2,
      title: t("completedProjects.title"),
      description: t("completedProjects.description")
    },
    {
      id: 3,
      title: t("capacityBuilding.title"),
      description: t("capacityBuilding.description")
    }
  ];

  const facts = [
    {
      id: 1,
      value: 5,
      unit: "+",
      label: t("ongoingProjects.title")
    },
    {
      id: 2,
      value: 10,
      unit: "+",
      label: t("completedProjects.title")
    }
  ];

  return (
    <>
      <div className="choose-us-style-two-area overflow-hidden default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pr-100 pr-md-15 pr-xs-15 pb-120 pb-md-60 pb-xs-60">
              <ul className="list-simple text-light">
                {chooseList.map((list) => (
                  <ChooseListV2 list={list} key={list.id} />
                ))}
              </ul>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="choose-us-style-two-content">
                <h4 className="sub-title">{t("subTitle")}</h4>
                <h2 className="title">{t("title")}</h2>
                <div className="choose-us-style-two-info">
                  <div className="content">
                    {facts.map((fact) => (
                      <FactV2 fact={fact} key={fact.id} />
                    ))}
                  </div>
                  <div className="thumb">
                    <Image src="/assets/img/thumb/4.jpg" alt="Image Not Found" className="h-auto" width={1200} height={900} />
                    <Link href="#" scroll={false} className="popup-youtube video-play-button" onClick={() => setOpen(true)}>
                      <i className="fas fa-play" />
                      <div className="effect" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId="0yoFrlxKMis" onClose={() => setOpen(false)} />
    </>
  );
};

export default CustomWhyChooseV2;
