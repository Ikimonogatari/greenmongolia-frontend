"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerGraphQL from "@/components/partner/PartnerGraphQL";
import LocalPartnersContent from "@/components/partner/LocalPartnersContent";

export default function LocalPartnersPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="localPartners" breadCrumbKey="partners / localPartners" />
                <PartnerGraphQL />
                <LocalPartnersContent />
            </LayoutV1>
        </>
    );
}

