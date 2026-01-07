import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
    title: "GMH - Committees, panels & groups"
};

const CommitteesPanelsGroupsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Committees, panels & groups" breadCrumb="Governance / Committees, panels & groups" />
                <TeamV2 />
                <WhyChooseV1 />
            </LayoutV1>
        </>
    );
};

export default CommitteesPanelsGroupsPage;

