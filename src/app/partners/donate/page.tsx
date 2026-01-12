"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import DonateContent from "@/components/partner/DonateContent";

export default function DonatePage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="donate" breadCrumbKey="partners / donate" />
                <DonateContent />
            </LayoutV1>
        </>
    );
}

