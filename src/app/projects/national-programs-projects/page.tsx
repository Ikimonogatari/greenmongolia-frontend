import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Counter from "@/components/counter/Counter";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - National programs & projects"
};

const NationalProgramsProjectsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="National programs & projects" breadCrumb="Projects & Programmes / National programs & projects" />
                <GalleryV2 />
                <Counter />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default NationalProgramsProjectsPage;

