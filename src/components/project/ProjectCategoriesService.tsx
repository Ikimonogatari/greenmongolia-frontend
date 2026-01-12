"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectCategoriesService = () => {
  const t = useTranslations("GMHProgramsProjects");

  const categories = [
    {
      id: 1,
      title: t("ongoingProjects.title"),
      description: t("ongoingProjects.description"),
      image: "1.png"
    },
    {
      id: 2,
      title: t("completedProjects.title"),
      description: t("completedProjects.description"),
      image: "2.png"
    },
    {
      id: 3,
      title: t("capacityBuilding.title"),
      description: t("capacityBuilding.description"),
      image: "3.png"
    },
    {
      id: 4,
      title: t("climateTechnologies.title"),
      description: t("climateTechnologies.description"),
      image: "4.png"
    },
    {
      id: 5,
      title: t("climateFinance.title"),
      description: t("climateFinance.description"),
      image: "5.png"
    }
  ];

  return (
    <>
      <div className="services-style-one-area bg-gray default-padding bottom-less">
        <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t("subTitle")}</h5>
                <h2 className="title">{t("title")}</h2>
                <p>{t("description")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {categories.map((category) => (
              <div className="col-lg-4 col-md-6 service-one-single" key={category.id}>
                <div className="service-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={`/assets/img/illustration/${category.image}`} 
                      alt={category.title} 
                      className="w-auto" 
                      width={720} 
                      height={740} 
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h4>
                        {category.title.split(" ")[0]} <span>{category.title.split(" ").slice(1).join(" ")}</span>
                      </h4>
                    </div>
                    <p>{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCategoriesService;
