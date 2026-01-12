import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import DonateContent from "@/components/partner/DonateContent";

export const metadata = {
    title: "GMH - Donate"
};

const DonatePage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Donate" breadCrumb="Partners / Donate" />
                <DonateContent />
            </LayoutV1>
        </>
    );
};

export default DonatePage;

