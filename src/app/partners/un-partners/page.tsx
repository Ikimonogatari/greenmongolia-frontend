import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - UN partners"
};

const UNPartnersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="UN partners" breadCrumb="Partners / UN partners" />
                <Partner />
                <TestimonialV2 />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default UNPartnersPage;

