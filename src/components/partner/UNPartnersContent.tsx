"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const UNPartnersContent = () => {
  const t = useTranslations("UNPartners");
  
  return (
    <>
      <div className="partner-detail-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* UNCCD Section */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("title")}</h2>
                <p className="lead">
                  {t("lead")}
                </p>
                
                <div className="mt-4">
                  <h4>{t("activities2024")}</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      <strong>UNFCCC COP29</strong> - {t("cop29")}
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      <strong>UNCCD CRIC23</strong> - {t("cric23")}
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("keyContributions")}</h4>
                  <p>
                    {t("contributionsDesc")}
                  </p>
                  <ul>
                    <li>{t("contribution1")}</li>
                    <li>{t("contribution2")}</li>
                    <li>{t("contribution3")}</li>
                    <li>{t("contribution4")}</li>
                    <li>{t("contribution5")}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="mb-2">
                    <strong>{t("unccdWebsite")}</strong>{" "}
                    <a 
                      href="https://www.unccd.int/cso/green-mongolia-hub-ngo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      https://www.unccd.int/cso/green-mongolia-hub-ngo
                    </a>
                  </p>
                </div>
              </div>

              {/* WOCAT Section */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("wocatTitle")}</h2>
                <p>
                  {t("wocatDesc")}
                </p>
                
                <div className="mt-4">
                  <h4>{t("wocatActivities")}</h4>
                  <ul>
                    <li>{t("wocatActivity1")}</li>
                    <li>{t("wocatActivity2")}</li>
                    <li>{t("wocatActivity3")}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4>{t("wocatField")}</h4>
                  <p>
                    {t("wocatFieldDesc")}
                  </p>
                </div>
              </div>

              {/* Drynet Section */}
              <div className="partner-section mb-5">
                <h2 className="mb-4">{t("drynetTitle")}</h2>
                <p>
                  {t("drynetDesc")}
                </p>
                
                <ul className="mt-3">
                  <li>{t("drynetProgram1")}</li>
                  <li>{t("drynetProgram2")}</li>
                </ul>

                <div className="mt-4">
                  <h4>{t("drynetCapacity")}</h4>
                  <p>{t("drynetCapacityDesc")}</p>
                  <ul>
                    <li>{t("drynetCapacity1")}</li>
                    <li>{t("drynetCapacity2")}</li>
                    <li>{t("drynetCapacity3")}</li>
                    <li>{t("drynetCapacity4")}</li>
                  </ul>
                </div>

                <p className="mt-3">
                  {t("drynetResult")}
                </p>
              </div>

              {/* International Recognition */}
              <div className="partner-section">
                <h2 className="mb-4">{t("recognitionTitle")}</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("unccdAccredited")}</h5>
                        <p className="card-text">
                          {t("unccdAccreditedDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("wocatMember")}</h5>
                        <p className="card-text">
                          {t("wocatMemberDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("drynetMember")}</h5>
                        <p className="card-text">
                          {t("drynetMemberDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{t("cop17Support")}</h5>
                        <p className="card-text">
                          {t("cop17SupportDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UNPartnersContent;
