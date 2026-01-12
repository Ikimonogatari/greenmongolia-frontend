"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SingleProgressV1 from "@/components/progress/SingleProgressV1";

const CustomAboutWhyChoose = () => {
  const t = useTranslations("About");

  const achievements = [
    {
      id: 1,
      title: t("achievements.achievement1.title"),
      description: t("achievements.achievement1.description")
    },
    {
      id: 2,
      title: t("achievements.achievement2.title"),
      description: t("achievements.achievement2.description")
    },
    {
      id: 3,
      title: t("achievements.achievement3.title"),
      description: t("achievements.achievement3.description")
    }
  ];

  const progressData = [
    {
      id: 1,
      title: t("progress.progress1.title"),
      end: 95
    },
    {
      id: 2,
      title: t("progress.progress2.title"),
      end: 90
    }
  ];

  return (
    <>
      <div className="choose-us-style-one-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-md-50 mb-xs-50">
              <div className="choose-us-thumb">
                <Image src="/assets/img/illustration/9.png" alt="Image Not Found" className="w-100" width={575} height={360} />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7 col-md-12 col-sm-12">
              <div className="achivement-items">
                <ul className="list-details">
                  {achievements.map((achievement) => (
                    <li key={achievement.id}>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="achivement-content">
                  {progressData.map((progress) => (
                    <SingleProgressV1 progress={progress} key={progress.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAboutWhyChoose;
