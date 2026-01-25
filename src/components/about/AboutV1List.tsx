"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface DataType {
    icon?: string;
    titleKey?: string;
    descriptionKey?: string;
}

const AboutV1List = ({ list }: { list: DataType }) => {
    const t = useTranslations("Home-About");
    const { icon, titleKey, descriptionKey } = list;

    return (
        <li>
            <div className="icon">
                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" className="w-auto" width={256} height={256} />
            </div>
            <div className="info">
                <h4>{titleKey ? t(titleKey) : ""}</h4>
                <p>{descriptionKey ? t(descriptionKey) : ""}</p>
            </div>
        </li>
    );
};

export default AboutV1List;
