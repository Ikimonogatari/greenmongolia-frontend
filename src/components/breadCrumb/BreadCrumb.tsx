"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface DataType {
  title?: string;
  breadCrumb?: string;
}

const BreadCrumb = ({ title, breadCrumb }: DataType) => {
  const t = useTranslations("Breadcrumb");

  // Format breadcrumb with slashes if needed
  const formatBreadcrumb = (crumb: string) => {
    if (crumb.includes(" / ")) {
      const parts = crumb.split(" / ").map((p) => p.trim());
      const translatedParts = parts.map((part) => {
        try {
          return t(part as any) || part;
        } catch {
          return part;
        }
      });
      return translatedParts.join(" / ");
    }
    try {
      return t(breadCrumb as any) || breadCrumb;
    } catch {
      return breadCrumb;
    }
  };

  const translatedTitle = title
    ? (() => {
        try {
          return t(title as any) || title;
        } catch {
          return title;
        }
      })()
    : t("errorPage");

  return (
    <>
      <div
        className="breadcrumb-area text-center shadow dark-hard bg-cover text-light"
        style={{ backgroundImage: "url(/assets/img/banner/15.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>{translatedTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">
                      <FaHome /> {t("home")}
                    </Link>
                  </li>
                  <li className="active">
                    {breadCrumb ? formatBreadcrumb(breadCrumb) : t("notFound")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
