"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerGraphQL from "@/components/partner/PartnerGraphQL";
import UNPartnersContent from "@/components/partner/UNPartnersContent";

export default function UNPartnersPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="unPartners" breadCrumbKey="partners / unPartners" />
                <PartnerGraphQL />
                <UNPartnersContent />
            </LayoutV1>
        </>
    );
}

