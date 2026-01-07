import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";
import CallToAction from "@/components/cta/CallToAction";

export const metadata = {
    title: "GMH - GMH publications"
};

const GMHPublicationsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH publications" breadCrumb="Data & Resources / GMH publications" />
                <BlogStandardContent />
                <WhyChooseV1 />
                <CallToAction />
            </LayoutV1>
        </>
    );
};

export default GMHPublicationsPage;

