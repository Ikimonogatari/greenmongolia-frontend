import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Counter from "@/components/counter/Counter";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - UN programs & projects"
};

const UNProgramsProjectsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="UN programs & projects" breadCrumb="Projects & Programmes / UN programs & projects" />
                <GalleryV2 />
                <Counter />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default UNProgramsProjectsPage;

