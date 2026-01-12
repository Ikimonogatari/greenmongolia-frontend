"use client";

import { useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

const HeaderTopV1 = () => {
  const t = useTranslations("Header");

  return (
    <>
      <div className="top-bar-area top-bar-style-one bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-8">
              <ul className="item-flex">
                <li>
                  <FaPhoneAlt /> &nbsp; 
                  <a href={`tel:${t("phone")}`}>
                    {t("phone")}
                  </a>
                </li>
                <li>
                  <FaEnvelope /> &nbsp; 
                  <a href={`mailto:${t("email")}`}>
                    {t("email")}
                  </a>
                </li>
                <li>
                  <FaGlobe /> &nbsp; 
                  <a href={t("website")} target="_blank" rel="noreferrer">
                    {t("websiteText")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-end">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.x.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopV1;
