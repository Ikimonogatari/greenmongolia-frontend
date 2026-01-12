import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import LocalPartnersContent from "@/components/partner/LocalPartnersContent";

export const metadata = {
    title: "GMH - Local partners"
};

const LocalPartnersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Local partners" breadCrumb="Partners / Local partners" />
                <Partner />
                <LocalPartnersContent />
            </LayoutV1>
        </>
    );
};

export default LocalPartnersPage;

