"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerGraphQL from "@/components/partner/PartnerGraphQL";
import PrivatePartnersContent from "@/components/partner/PrivatePartnersContent";

export default function PrivatePartnersPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="privatePartners" breadCrumbKey="partners / privatePartners" />
                <PartnerGraphQL />
                <PrivatePartnersContent />
            </LayoutV1>
        </>
    );
}

