"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PrivatePartnersContent = () => {
  const t = useTranslations("PrivatePartners");
  
  return (
    <>
      <div className="partner-detail-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* Kubuqi Model Initiative */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("title")}</h2>
                <p className="lead">
                  {t("lead")}
                </p>
                <p className="lead">
                  <em>{t("subtitle")}</em>
                </p>
              </div>

              {/* Collaboration Partners */}
              <div className="partner-section mb-5">
                <h3 className="mb-4">{t("collaborationPartners")}</h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("zheshang")}</h5>
                        <p className="card-text">{t("zheshangDesc")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("longi")}</h5>
                        <p className="card-text">{t("longiDesc")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("gmh")}</h5>
                        <p className="card-text">{t("gmhDesc")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="alert alert-success mt-4">
                  <strong>{t("showcaseEvent")}</strong> {t("showcaseEventDesc")}
                </div>
              </div>

              {/* What is Kubuqi Model */}
              <div className="partner-section mb-5">
                <h3 className="mb-4">{t("whatIsKubuqi")}</h3>
                <p>
                  {t("kubuqiDesc")}
                </p>
                <ul>
                  <li>{t("kubuqi1")}</li>
                  <li>{t("kubuqi2")}</li>
                  <li>{t("kubuqi3")}</li>
                  <li>{t("kubuqi4")}</li>
                </ul>

                <div className="row mt-4">
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 border-primary">
                      <div className="card-body">
                        <h5 className="card-title text-primary">
                          <i className="fas fa-leaf me-2"></i>
                          {t("ecologicalRestoration")}
                        </h5>
                        <p className="card-text">
                          {t("ecologicalRestorationDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h5 className="card-title text-success">
                          <i className="fas fa-solar-panel me-2"></i>
                          {t("renewableEnergy")}
                        </h5>
                        <p className="card-text">
                          {t("renewableEnergyDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h5 className="card-title text-warning">
                          <i className="fas fa-users me-2"></i>
                          {t("communityEngagement")}
                        </h5>
                        <p className="card-text">
                          {t("communityEngagementDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Goals */}
              <div className="partner-section mb-5">
                <h3 className="mb-4">{t("projectGoals")}</h3>
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="card-title">{t("mainGoal")}</h5>
                    <p>
                      {t("mainGoalDesc")}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h5>{t("expectedOutcomes")}</h5>
                  <ul>
                    <li>{t("outcome1")}</li>
                    <li>{t("outcome2")}</li>
                    <li>{t("outcome3")}</li>
                    <li>{t("outcome4")}</li>
                  </ul>
                </div>
              </div>

              {/* Project Implementation */}
              <div className="partner-section mb-5">
                <h3 className="mb-4">{t("projectImplementation")}</h3>
                <p>
                  {t("projectImplementationDesc")}
                </p>

                <div className="row mt-4">
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-seedling text-success me-2"></i>
                          1. {t("implementation1")}
                        </h5>
                        <p className="card-text">
                          {t("implementation1Desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-industry text-primary me-2"></i>
                          2. {t("implementation2")}
                        </h5>
                        <p className="card-text">
                          {t("implementation2Desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-handshake text-warning me-2"></i>
                          3. {t("implementation3")}
                        </h5>
                        <p className="card-text">
                          {t("implementation3Desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilot Site */}
              <div className="partner-section mb-5">
                <h3 className="mb-4">{t("pilotSite")}</h3>
                <div className="card border-primary">
                  <div className="card-body">
                    <h5 className="card-title">{t("pilotSiteTitle")}</h5>
                    <p className="card-text">
                      <strong>{t("pilotLocation")}</strong> {t("pilotLocationDesc")}<br/>
                      <strong>{t("pilotInitial")}</strong> {t("pilotInitialDesc")}<br/>
                      <strong>{t("pilotScale")}</strong> {t("pilotScaleDesc")}
                    </p>
                    <p className="card-text mt-3">
                      {t("pilotSuccess")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="partner-section">
                <div className="alert alert-primary text-center">
                  <h4 className="mb-3">{t("visionStatement")}</h4>
                  <p className="mb-0">
                    {t("visionSubtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivatePartnersContent;
