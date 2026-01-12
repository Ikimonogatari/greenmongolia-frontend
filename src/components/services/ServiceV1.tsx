"use client";
import { useTranslations } from "next-intl";
import SingleServiceV1 from './SingleServiceV1';

interface DataType {
    hasTitle?: boolean
}

const ServiceV1 = ({ hasTitle }: DataType) => {
    const t = useTranslations("Home.services");
    
    // Core activities from the document
    const services = [
        {
            id: 1,
            image: "1.png",
            title: t("service1.title"),
            description: t("service1.description")
        },
        {
            id: 2,
            image: "2.png",
            title: t("service2.title"),
            description: t("service2.description")
        },
        {
            id: 3,
            image: "3.png",
            title: t("service3.title"),
            description: t("service3.description")
        }
    ];

    return (
        <>
            <div className="services-style-one-area bg-gray default-padding bottom-less">
                <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
                <div className="container">

                    {/* Title */}
                    {hasTitle &&
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h5 className="sub-title">{t("subTitle")}</h5>
                                    <h2 className="title">{t("title")}</h2>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="row">
                        {services.map(service =>
                            <div className="col-lg-4 col-md-6 service-one-single" key={service.id}>
                                <SingleServiceV1 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV1;