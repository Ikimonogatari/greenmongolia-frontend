import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";
import FaqV2 from "@/components/faq/FaqV2";

export const metadata = {
    title: "GMH - GMH tools & methods"
};

const GMHToolsMethodsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH tools & methods" breadCrumb="Data & Resources / GMH tools & methods" />
                <BlogStandardContent />
                <WhyChooseV1 />
                <FaqV2 />
            </LayoutV1>
        </>
    );
};

export default GMHToolsMethodsPage;

