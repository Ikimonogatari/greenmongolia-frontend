import AboutV1 from "@/components/about/AboutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TimelineV1 from "@/components/timeline/TimelineV1";
import WhyChooseV3 from "@/components/whyChoose/WhyChooseV3";
import Counter from "@/components/counter/Counter";

export const metadata = {
    title: "GMH - About GMH"
};

const AboutGMHPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About GMH" breadCrumb="About GMH" />
                <AboutV1 />
                <TimelineV1 sectionClass="default-padding-bottom" />
                <Counter />
                <WhyChooseV3 />
            </LayoutV1>
        </>
    );
};

export default AboutGMHPage;

