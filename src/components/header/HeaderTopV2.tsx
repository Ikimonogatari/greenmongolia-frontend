"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HeaderTopV2 = () => {
    const t = useTranslations("Header");

    return (
        <>
            <div className="top-bar top-style-two bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-4 col-lg-4 col-md-4 info">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="content">
                                        <span>{t("contactPhone")}</span>
                                        <a href={`tel:${t("phone")}`}>{t("phone")}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 logo">
                            <Link href="/">
                                <Image src="/assets/img/logo-mix-light.png" alt="Logo" width={790} height={240} />
                            </Link>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 text-end info">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="content">
                                        <span>{t("contactEmail")}</span>
                                        <a href={`mailto:${t("email")}`}>{t("email")}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV2;