"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import CommitteesPanelsContent from "@/components/governance/CommitteesPanelsContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function CommitteesPanelsGroupsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="committeesPanelsGroups" breadCrumbKey="governance / committeesPanelsGroups" />
                <CommitteesPanelsContent />
            </LayoutV1>
        </>
    );
}

