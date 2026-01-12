"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import GMHInitiativesContent from "@/components/project/GMHInitiativesContent";

export default function GMHInitiativesPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhInitiatives" breadCrumbKey="projectsProgrammes / gmhInitiatives" />
                <GMHInitiativesContent />
            </LayoutV1>
        </>
    );
}

