"use client";
import { useTranslations } from "next-intl";
import SingleChooseV4 from "@/components/whyChoose/SingleChooseV4";
import Image from "next/image";
import Counter from "@/components/counter/Counter";

const CustomWhyChooseV4 = () => {
  const t = useTranslations("GMHInitiatives");

  const chooseList = [
    {
      id: 1,
      icon: "1.png",
      alt: t("kubuqiModel.pillars.pillar1.title"),
      title: t("kubuqiModel.pillars.pillar1.title"),
      description: `${t("kubuqiModel.pillars.pillar1.desc1")} ${t("kubuqiModel.pillars.pillar1.desc2")}`
    },
    {
      id: 2,
      icon: "2.png",
      alt: t("kubuqiModel.pillars.pillar2.title"),
      title: t("kubuqiModel.pillars.pillar2.title"),
      description: `${t("kubuqiModel.pillars.pillar2.desc1")} ${t("kubuqiModel.pillars.pillar2.desc2")}`
    },
    {
      id: 3,
      icon: "3.png",
      alt: t("kubuqiModel.pillars.pillar3.title"),
      title: t("kubuqiModel.pillars.pillar3.title"),
      description: `${t("kubuqiModel.pillars.pillar3.desc1")} ${t("kubuqiModel.pillars.pillar3.desc2")}`
    },
    {
      id: 4,
      icon: "4.png",
      alt: t("agrivoltaics.title"),
      title: t("agrivoltaics.title"),
      description: t("agrivoltaics.description")
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
                      <div className="timer"><Counter end={18000} /></div>
                      <div className="operator"> km²</div>
                    </div>
                    <span className="medium">{t("kubuqiModel.achievements.restored")}</span>
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

export default CustomWhyChooseV4;
