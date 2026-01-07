import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Counter from "@/components/counter/Counter";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - GMH initiatives"
};

const GMHInitiativesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH initiatives" breadCrumb="Projects & Programmes / GMH initiatives" />
                <GalleryV2 />
                <Counter />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default GMHInitiativesPage;

