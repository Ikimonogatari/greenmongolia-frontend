"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SingleProgressV1 from "../progress/SingleProgressV1";

interface DataType {
    sectionClass?: string;
}

const WhyChooseV1 = ({ sectionClass }: DataType) => {
    const t = useTranslations("Home-WhyChoose");
    
    const achievements = [
        {
            id: 1,
            title: t("achievement1.title"),
            description: t("achievement1.description")
        },
        {
            id: 2,
            title: t("achievement2.title"),
            description: t("achievement2.description")
        },
        {
            id: 3,
            title: t("achievement3.title"),
            description: t("achievement3.description")
        }
    ];

    const progressData = [
        {
            id: 1,
            title: t("progress1.title"),
            end: 100
        },
        {
            id: 2,
            title: t("progress2.title"),
            end: 100
        }
    ];

    return (
        <>
            <div className={`choose-us-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="choose-us-thumb">
                                <Image 
                                    src="/assets/img/illustration/9.png" 
                                    alt="Green Mongolia Hub" 
                                    width={575} 
                                    height={360}
                                    style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="achivement-items">
                                <ul className="list-details">
                                    {achievements.map(list =>
                                        <li key={list.id}>
                                            <h4>{list.title}</h4>
                                            <p>{list.description}</p>
                                        </li>
                                    )}
                                </ul>
                                <div className="achivement-content">
                                    {progressData.map(progress =>
                                        <SingleProgressV1 progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;