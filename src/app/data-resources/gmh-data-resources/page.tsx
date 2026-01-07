import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";
import FaqV1 from "@/components/faq/FaqV1";

export const metadata = {
    title: "GMH - GMH data & resources"
};

const GMHDataResourcesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH data & resources" breadCrumb="Data & Resources / GMH data & resources" />
                <BlogStandardContent />
                <WhyChooseV1 />
                <FaqV1 />
            </LayoutV1>
        </>
    );
};

export default GMHDataResourcesPage;

