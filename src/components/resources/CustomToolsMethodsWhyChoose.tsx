"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomToolsMethodsWhyChoose = () => {
  const t = useTranslations("GMHToolsMethods");

  const methods = [
    t("methods.method1"),
    t("methods.method2"),
    t("methods.method3"),
    t("methods.method4")
  ];

  return (
    <>
      <div className="choose-us-style-three-area default-padding bg-dark text-light">
        <div className="illustration-bottom">
          <Image
            src="/assets/img/illustration/17.png"
            alt="Image Not Found"
            width={700}
            height={400}
          />
        </div>
        <div
          className="shape"
          style={{ backgroundImage: "url(/assets/img/about/3.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
              <h2 className="title">{t("title")}</h2>
              <p>{t("description")}</p>
              <div className="list-grid">
                <ul className="list-item">
                  {methods.map((method: string, index: number) => (
                    <li key={index}>{method}</li>
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

export default CustomToolsMethodsWhyChoose;
