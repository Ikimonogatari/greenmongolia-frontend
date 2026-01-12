"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SingleProgressV1 from "@/components/progress/SingleProgressV1";

const CustomDonateImpact = () => {
  const t = useTranslations("Donate");

  const impacts = [
    {
      id: 1,
      title: t("landRestoration"),
      description: t("landRestorationDesc")
    },
    {
      id: 2,
      title: t("communityEmpowerment"),
      description: t("communityEmpowermentDesc")
    },
    {
      id: 3,
      title: t("climateResilience"),
      description: t("climateResilienceDesc")
    }
  ];

  const progressData = [
    {
      id: 1,
      title: t("landRestoration"),
      end: 95
    },
    {
      id: 2,
      title: t("communityEmpowerment"),
      end: 88
    }
  ];

  return (
    <>
      <div className="choose-us-style-one-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5">
              <div className="choose-us-thumb">
                <Image src="/assets/img/illustration/9.png" alt="Image Not Found" width={575} height={360} />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="achivement-items">
                <ul className="list-details">
                  {impacts.map((impact) => (
                    <li key={impact.id}>
                      <h4>{impact.title}</h4>
                      <p>{impact.description}</p>
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

export default CustomDonateImpact;
