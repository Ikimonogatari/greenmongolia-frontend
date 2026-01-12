"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import GovernanceContent from "@/components/governance/GovernanceContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function GovernancePage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="governance" breadCrumbKey="governance" />
                <GovernanceContent />
            </LayoutV1>
        </>
    );
}

