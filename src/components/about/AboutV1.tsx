"use client";
import AboutV1ListData from "@/assets/jsonData/about/AboutV1ListData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import AboutV1List from "./AboutV1List";
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {
  useEffect(() => {
    // Set initial position
    gsap.set(".animation-shape", {
      yPercent: 10,
    });

    // Create the animation
    gsap.to(".animation-shape", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".animation-shape",
        scrub: 1,
      },
    });
  }, []);
  const t = useTranslations("Home-About");
  return (
    <>
      <div className="about-style-one-area default-padding overflow-hidden">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-5">
              <div className="about-style-one-thumb">
                <Image
                  src="/assets/img/about/1.jpg"
                  alt="Image Not Found"
                  width={305}
                  height={420}
                />
                <div className="animation-shape">
                  <Image
                    src="/assets/img/illustration/1.png"
                    alt="Image Not Found"
                    width={250}
                    height={533}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-style-one-info">
                <h2 className="title">{t("title")}</h2>
                <p>{t("description")}</p>
                <div className="fun-fact-style-flex mt-35">
                  Green Mongolia Hub NGO – UNCCD CSO Profile
                </div>
                <ul className="top-feature">
                  {AboutV1ListData.map((list) => (
                    <AboutV1List key={list.id} list={list} />
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

export default AboutV1;
