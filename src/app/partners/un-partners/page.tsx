import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import UNPartnersContent from "@/components/partner/UNPartnersContent";

export const metadata = {
    title: "GMH - UN partners"
};

const UNPartnersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="UN partners" breadCrumb="Partners / UN partners" />
                <Partner />
                <UNPartnersContent />
            </LayoutV1>
        </>
    );
};

export default UNPartnersPage;

