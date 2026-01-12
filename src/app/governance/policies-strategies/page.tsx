"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PoliciesStrategiesContent from "@/components/governance/PoliciesStrategiesContent";

export default function PoliciesStrategiesPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="policiesStrategies" breadCrumbKey="governance / policiesStrategies" />
                <PoliciesStrategiesContent />
            </LayoutV1>
        </>
    );
}

