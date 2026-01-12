"use client";
import GMHDataResourcesContent from "@/components/resources/GMHDataResourcesContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function GMHDataResourcesPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhDataResources" breadCrumbKey="dataResources / gmhDataResources" />
                <GMHDataResourcesContent />
            </LayoutV1>
        </>
    );
}

