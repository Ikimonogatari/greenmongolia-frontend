"use client";
import CareersContent from "@/components/about/CareersContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function CareersPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="careers" breadCrumbKey="careers" />
                <CareersContent />
            </LayoutV1>
        </>
    );
}

