"use client";
import { useGetNewsQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import FooterRecentPost from "./FooterRecentPost";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";
  const { data: newsData, isLoading, error } = useGetNewsQuery();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  };

  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success(t("subscribeSuccess"));
  };

  // Transform news for footer display (2 most recent)
  const recentArticles = newsData
    ? newsData
        .filter((item) => item.status === "published")
        .sort((a, b) => {
          const dateA = new Date(a.date_created || 0).getTime();
          const dateB = new Date(b.date_created || 0).getTime();
          return dateB - dateA;
        })
        .slice(0, 2)
        .map((article) => {
          const translation = getTranslation(article.translations, languageCode);
          
          // Format date
          let full_date = "";
          if (article.date_created) {
            const dateObj = new Date(article.date_created);
            full_date = `${dateObj
              .getDate()
              .toString()
              .padStart(2, "0")} ${dateObj.toLocaleString(locale, {
              month: "short",
            })}, ${dateObj.getFullYear()}`;
          }

          // Get image URL using helper
          const imageUrl = getDirectusImageUrl(article.image || article.cover_image);

          return {
            id: article.id,
            title: translation?.title || "Untitled",
            full_date: full_date,
            thumb: imageUrl || "/assets/img/blog/default-thumb.jpg",
          };
        })
    : [];

  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{ backgroundImage: "url(/assets/img/shape/8.png)" }}
      >
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="footer-item about">
                  <Link href="/">
                    <Image
                      className="logo w-auto"
                      src="/assets/img/logo-light.png"
                      alt="Logo"
                      width={790}
                      height={240}
                    />
                  </Link>
                  <p>{t("description")}</p>
                  <form onSubmit={handleForm}>
                    <input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      required
                    />
                    <button type="submit" aria-label={t("subscribeButton")}>
                      <FaPaperPlane />
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 item">
                <div className="footer-item link footer-dropdown-column">
                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("about")}
                  >
                    {t("navigation.about")}
                    <FaChevronDown
                      className={openDropdown === "about" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "about" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/about-us">{t("navigation.aboutGmh")}</Link>
                    </li>
                    <li>
                      <Link href="/board-of-advisors">
                        {t("navigation.board")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/governance">
                        {t("navigation.governance")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">{t("navigation.careers")}</Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("governance")}
                  >
                    {t("navigation.governance")}
                    <FaChevronDown
                      className={openDropdown === "governance" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "governance" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/governance/gmh-board">
                        {t("navigation.gmhBoard")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/governance/committees-panels-groups">
                        {t("navigation.committees")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/governance/policies-strategies">
                        {t("navigation.policies")}
                      </Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("partners")}
                  >
                    {t("navigation.partners")}
                    <FaChevronDown
                      className={openDropdown === "partners" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "partners" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/partners/local-partners">
                        {t("navigation.localPartners")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/un-partners">
                        {t("navigation.unPartners")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/private-partners">
                        {t("navigation.privatePartners")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/donate">
                        {t("navigation.donate")}
                      </Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("projects")}
                  >
                    {t("navigation.projects")}
                    <FaChevronDown
                      className={openDropdown === "projects" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "projects" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/projects/national-programs-projects">
                        {t("navigation.nationalPrograms")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/un-programs-projects">
                        {t("navigation.unPrograms")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/gmh-programs-projects">
                        {t("navigation.gmhPrograms")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/gmh-initiatives">
                        {t("navigation.initiatives")}
                      </Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("news")}
                  >
                    News
                    <FaChevronDown
                      className={openDropdown === "news" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "news" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/news/news-media">News Media</Link>
                    </li>
                    <li>
                      <Link href="/news/events">Events</Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("resources")}
                  >
                    Resources
                    <FaChevronDown
                      className={openDropdown === "resources" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "resources" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/data-resources/gmh-data-resources">
                        Data & Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/data-resources/gmh-tools-methods">
                        Tools & Methods
                      </Link>
                    </li>
                    <li>
                      <Link href="/data-resources/gmh-publications">
                        Publications
                      </Link>
                    </li>
                  </ul>

                  <h4
                    className="widget-title footer-dropdown-toggle"
                    onClick={() => toggleDropdown("membership")}
                  >
                    Membership
                    <FaChevronDown
                      className={openDropdown === "membership" ? "rotated" : ""}
                    />
                  </h4>
                  <ul
                    className={`footer-dropdown-menu ${
                      openDropdown === "membership" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link href="/membership/membership-categories">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link href="/membership/applications">Applications</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 item">
                <div className="footer-item recent-post">
                  <h4 className="widget-title">{t("recentPosts.title")}</h4>
                  {isLoading ? (
                    <ul>
                      <li>
                        <div className="info">
                          <div className="meta-title">
                            <span className="post-date">
                              {t("recentPosts.loading")}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ) : error ? (
                    <ul>
                      <li>
                        <div className="info">
                          <div className="meta-title">
                            <span className="post-date">
                              {t("recentPosts.error")}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ) : recentArticles.length > 0 ? (
                    <ul>
                      {recentArticles.map((article) => (
                        <FooterRecentPost blog={article} key={article.id} />
                      ))}
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <div className="info">
                          <div className="meta-title">
                            <span className="post-date">
                              {t("recentPosts.noPosts")}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 item">
                <div className="footer-item contact">
                  <h4 className="widget-title">{t("contactInfo.title")}</h4>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-home" />
                      </div>
                      <div className="content">
                        <strong>{t("contactInfo.address")}:</strong>
                        <div
                          style={{
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            lineHeight: "1.6",
                            marginTop: "5px",
                          }}
                        >
                          {t("contactInfo.addressValue")}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="content">
                        <strong>{t("contactInfo.email")}:</strong>
                        <a
                          href={`mailto:${t("contactInfo.emailValue")}`}
                          style={{
                            display: "block",
                            wordBreak: "break-word",
                            marginTop: "5px",
                          }}
                        >
                          {t("contactInfo.emailValue")}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="content">
                        <strong>{t("contactInfo.phone")}:</strong>
                        <a
                          href={`tel:${t("contactInfo.phoneValue")}`}
                          style={{ display: "block", marginTop: "5px" }}
                        >
                          {t("contactInfo.phoneValue")}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center">
            <div className="row">
              <div className="col-lg-12">
                <p>{t("copyright", { year: new Date().getFullYear() })}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-right-bottom">
          <Image
            src="/assets/img/shape/7.png"
            alt="Image Not Found"
            width={1000}
            height={500}
          />
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
