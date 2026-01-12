"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const DonateContent = () => {
  const t = useTranslations("Donate");
  
  return (
    <>
      <div className="donate-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* Main Heading */}
              <div className="text-center mb-5">
                <h1 className="mb-3">{t("title")}</h1>
                <p className="lead">
                  {t("subtitle")}
                </p>
              </div>

              {/* Why Donate Section */}
              <div className="donate-section mb-5">
                <div className="card border-primary">
                  <div className="card-body p-4">
                    <h3 className="mb-4">{t("whySupport")}</h3>
                    <p>
                      {t("whySupportDesc")}
                    </p>
                    <p className="mt-3">
                      {t("whySupportDesc2")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Donation Options */}
              <div className="donate-section mb-5">
                <h3 className="mb-4 text-center">{t("supportToday")}</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-hand-holding-usd text-primary me-2"></i>
                          {t("giveOnce")}
                        </h5>
                        <p className="card-text">
                          {t("giveOnceDesc")}
                        </p>
                        <Link 
                          href="https://onetreeplanted.org/products/plant-trees?g_adtype=&g_network=g&g_keyword=tree%20planting%20charity&g_placement=&g_campaignid=22826629190&g_adid=765695211320&g_merchantid=&g_ifcreative=&g_locphysical=1010217&g_source={sourceid}&g_keywordid=kwd-26239"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          {t("donateNow")}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-calendar-check text-success me-2"></i>
                          {t("giveMonthly")}
                        </h5>
                        <p className="card-text">
                          {t("giveMonthlyDesc")}
                        </p>
                        <Link 
                          href="https://onetreeplanted.org/products/plant-trees?g_adtype=&g_network=g&g_keyword=tree%20planting%20charity&g_placement=&g_campaignid=22826629190&g_adid=765695211320&g_merchantid=&g_ifcreative=&g_locphysical=1010217&g_source={sourceid}&g_keywordid=kwd-26239"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success"
                        >
                          {t("setUpMonthly")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggested Amounts */}
              <div className="donate-section mb-5">
                <h4 className="mb-3 text-center">{t("selectAmount")}</h4>
                <div className="row justify-content-center">
                  <div className="col-auto mb-3">
                    <button className="btn btn-outline-primary btn-lg">$5</button>
                  </div>
                  <div className="col-auto mb-3">
                    <button className="btn btn-outline-primary btn-lg">$20</button>
                  </div>
                  <div className="col-auto mb-3">
                    <button className="btn btn-outline-primary btn-lg">$50</button>
                  </div>
                  <div className="col-auto mb-3">
                    <button className="btn btn-outline-primary btn-lg">$100</button>
                  </div>
                  <div className="col-auto mb-3">
                    <button className="btn btn-outline-primary btn-lg">Other</button>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <small className="text-muted">
                    <i className="fas fa-lock me-1"></i>
                    {t("secureCheckout")}
                  </small>
                </div>
              </div>

              {/* Institutional Support */}
              <div className="donate-section mb-5">
                <div className="alert alert-info text-center">
                  <h5 className="mb-3">{t("institutionalSupport")}</h5>
                  <p className="mb-3">
                    {t("institutionalSupportDesc")}
                  </p>
                  <Link href="/contact" className="btn btn-info">
                    {t("partnerWithUs")}
                  </Link>
                </div>
              </div>

              {/* Impact Areas */}
              <div className="donate-section">
                <h3 className="mb-4 text-center">{t("yourSupport")}</h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <i className="fas fa-seedling fa-3x text-success mb-3"></i>
                        <h5 className="card-title">{t("landRestoration")}</h5>
                        <p className="card-text">
                          {t("landRestorationDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <i className="fas fa-users fa-3x text-primary mb-3"></i>
                        <h5 className="card-title">{t("communityEmpowerment")}</h5>
                        <p className="card-text">
                          {t("communityEmpowermentDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <i className="fas fa-globe fa-3x text-warning mb-3"></i>
                        <h5 className="card-title">{t("climateResilience")}</h5>
                        <p className="card-text">
                          {t("climateResilienceDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Donation Link */}
              <div className="donate-section mt-5 text-center">
                <div className="card bg-light">
                  <div className="card-body">
                    <h4 className="mb-3">{t("readyToDonate")}</h4>
                    <Link 
                      href="https://onetreeplanted.org/products/plant-trees?g_adtype=&g_network=g&g_keyword=tree%20planting%20charity&g_placement=&g_campaignid=22826629190&g_adid=765695211320&g_merchantid=&g_ifcreative=&g_locphysical=1010217&g_source={sourceid}&g_keywordid=kwd-26239"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                    >
                      <i className="fas fa-heart me-2"></i>
                      {t("donateNow")}
                    </Link>
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

export default DonateContent;
