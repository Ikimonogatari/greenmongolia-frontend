import AboutV1 from "@/components/about/AboutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TimelineV1 from "@/components/timeline/TimelineV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - Governance"
};

const GovernancePage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Governance" breadCrumb="Governance" />
                <AboutV1 />
                <TimelineV1 sectionClass="default-padding-bottom" />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default GovernancePage;

