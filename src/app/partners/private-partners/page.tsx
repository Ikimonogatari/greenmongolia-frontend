import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import PrivatePartnersContent from "@/components/partner/PrivatePartnersContent";

export const metadata = {
    title: "GMH - Private partners"
};

const PrivatePartnersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Private partners" breadCrumb="Partners / Private partners" />
                <Partner />
                <PrivatePartnersContent />
            </LayoutV1>
        </>
    );
};

export default PrivatePartnersPage;

