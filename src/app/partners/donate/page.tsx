import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import CallToAction from "@/components/cta/CallToAction";
import Counter from "@/components/counter/Counter";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - Donate"
};

const DonatePage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Donate" breadCrumb="Partners / Donate" />
                <CallToAction />
                <Counter />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default DonatePage;

