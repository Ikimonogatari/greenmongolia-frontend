import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import CallToAction from "@/components/cta/CallToAction";

export const metadata = {
    title: "GMH - News media"
};

const NewsMediaPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="News media" breadCrumb="News & Events / News media" />
                <BlogStandardContent />
                <CallToAction />
            </LayoutV1>
        </>
    );
};

export default NewsMediaPage;

