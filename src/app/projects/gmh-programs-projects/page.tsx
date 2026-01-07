import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - GMH programs & projects"
};

const GMHProgramsProjectsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH programs & projects" breadCrumb="Projects & Programmes / GMH programs & projects" />
                <GalleryV2 />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default GMHProgramsProjectsPage;

