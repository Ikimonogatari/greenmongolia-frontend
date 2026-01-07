import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV1 from "@/components/testimonials/TestimonialV1";

export const metadata = {
    title: "GMH - Board of Advisors"
};

const BoardOfAdvisorsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Board of Advisors" breadCrumb="Board of Advisors" />
                <TeamV1 />
                <TestimonialV1 />
            </LayoutV1>
        </>
    );
};

export default BoardOfAdvisorsPage;

