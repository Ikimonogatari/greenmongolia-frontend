"use client";
import { getDirectusImageUrl, getTranslation, useGetActivitiesQuery } from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface DataType {
    hasTitle?: boolean;
}

const ServiceV1GraphQL = ({ hasTitle }: DataType) => {
    const t = useTranslations("Home.services");
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: activitiesData, isLoading, error } = useGetActivitiesQuery();
    
    // Get published activities and sort by sort field
    const activities = activitiesData
        ?.filter(item => item.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0))
        ?.slice(0, 3) || [];

    // Fallback static services if no data
    const staticServices = [
        {
            id: 1,
            image: "slm-practices.png",
            title: t("service1.title"),
            description: t("service1.description")
        },
        {
            id: 2,
            image: "capacity-building.png",
            title: t("service2.title"),
            description: t("service2.description")
        },
        {
            id: 3,
            image: "cooperation.png",
            title: t("service3.title"),
            description: t("service3.description")
        }
    ];

    return (
        <div className="services-style-one-area bg-gray default-padding bottom-less">
            <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }} />
            <div className="container">
                {/* Title */}
                {hasTitle && (
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t("subTitle")}</h5>
                                <h2 className="title">{t("title")}</h2>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">
                    {isLoading ? (
                        <div className="col-12 text-center">
                            <p>Loading services...</p>
                        </div>
                    ) : error || activities.length === 0 ? (
                        // Show static services as fallback
                        staticServices.map(service => (
                            <div className="col-lg-4 col-md-6 service-one-single" key={service.id}>
                                <div className="services-style-one">
                                    <div className="thumb">
                                        <Image 
                                            src={`/assets/img/icon/${service.image}`}
                                            alt={service.title}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div className="info">
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Show dynamic activities
                        activities.map(activity => {
                            const translation = getTranslation(activity.translations, languageCode);
                            const imageUrl = getDirectusImageUrl(activity.image);
                            
                            return (
                                <div className="col-lg-4 col-md-6 service-one-single" key={activity.id}>
                                    <div className="services-style-one">
                                        <div className="thumb">
                                            {imageUrl ? (
                                                <Image 
                                                    src={imageUrl}
                                                    alt={translation?.name || "Activity"}
                                                    width={80}
                                                    height={80}
                                                    style={{ objectFit: 'contain' }}
                                                    unoptimized={true}
                                                />
                                            ) : (
                                                <Image 
                                                    src="/assets/img/icon/1.png"
                                                    alt={translation?.name || "Activity"}
                                                    width={80}
                                                    height={80}
                                                />
                                            )}
                                        </div>
                                        <div className="info">
                                            <h4>{translation?.name || "Untitled"}</h4>
                                            <p>{translation?.description || ""}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceV1GraphQL;
