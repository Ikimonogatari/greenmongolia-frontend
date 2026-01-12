"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Partner from "@/components/partner/Partner";
import PrivatePartnersContent from "@/components/partner/PrivatePartnersContent";

export default function PrivatePartnersPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="privatePartners" breadCrumbKey="partners / privatePartners" />
                <Partner />
                <PrivatePartnersContent />
            </LayoutV1>
        </>
    );
}

