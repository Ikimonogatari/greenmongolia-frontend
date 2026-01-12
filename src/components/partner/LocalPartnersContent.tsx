"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LocalPartnersContent = () => {
  const t = useTranslations("LocalPartners");
  
  return (
    <>
      <div className="partner-detail-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* Billion Tree Fund Partnership */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("title")}</h2>
                <p className="lead">
                  {t("lead")}
                </p>
                
                <div className="alert alert-info mt-4">
                  <p className="mb-2">
                    <strong>{t("website")}</strong>{" "}
                    <a 
                      href="https://billiontree.mn/content/detail/158" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      https://billiontree.mn/content/detail/158
                    </a>
                  </p>
                </div>

                <div className="mt-4">
                  <h4>{t("partnershipDetails")}</h4>
                  <p>
                    {t("partnershipDesc")}
                  </p>
                  <ul>
                    <li><strong>{t("signatory1")}</strong></li>
                    <li><strong>{t("signatory2")}</strong></li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("cooperationFramework")}</h4>
                  <p>
                    {t("cooperationDesc")}
                  </p>
                  <ul>
                    <li>{t("cooperation1")}</li>
                    <li>{t("cooperation2")}</li>
                    <li>{t("cooperation3")}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("jointProjects")}</h4>
                  <p>
                    {t("jointProjectsDesc")}
                  </p>
                  <ul>
                    <li>{t("jointProject1")}</li>
                    <li>{t("jointProject2")}</li>
                    <li>{t("jointProject3")}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("resultFinancing")}</h4>
                  <p>
                    {t("resultFinancingDesc")}
                  </p>
                  <ul>
                    <li>{t("resultFinancing1")}</li>
                    <li>{t("resultFinancing2")}</li>
                    <li>{t("resultFinancing3")}</li>
                    <li>{t("resultFinancing4")}</li>
                    <li>{t("resultFinancing5")}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("forestCarbon")}</h4>
                  <p>
                    {t("forestCarbonDesc")}
                  </p>
                </div>
              </div>

              {/* Other Local Partners */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("otherPartners")}</h2>
                <p>
                  {t("otherPartnersDesc")}
                </p>
                
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("giz")}</h5>
                        <p className="card-text">
                          {t("gizDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("stream")}</h5>
                        <p className="card-text">
                          {t("streamDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("forestry")}</h5>
                        <p className="card-text">
                          {t("forestryDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("soum")}</h5>
                        <p className="card-text">
                          {t("soumDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Activities */}
              <div className="partner-section">
                <h2 className="mb-4">{t("keyActivities")}</h2>
                <p>
                  {t("keyActivitiesDesc")}
                </p>
                <ul>
                  <li>
                    <strong>{t("activity1")}</strong>
                  </li>
                  <li>
                    <strong>{t("activity2")}</strong>
                  </li>
                  <li>
                    <strong>{t("activity3")}</strong>
                  </li>
                </ul>
                <p className="mt-3">
                  {t("keyActivitiesResult")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalPartnersContent;
