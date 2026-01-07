import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV2 from "@/components/testimonials/TestimonialV2";

export const metadata = {
    title: "GMH - GMH Board"
};

const GMHBoardPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="GMH Board" breadCrumb="Governance / GMH Board" />
                <TeamV3 />
                <TestimonialV2 />
            </LayoutV1>
        </>
    );
};

export default GMHBoardPage;

