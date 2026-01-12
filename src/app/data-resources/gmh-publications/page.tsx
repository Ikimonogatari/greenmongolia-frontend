"use client";
import GMHPublicationsContent from "@/components/resources/GMHPublicationsContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function GMHPublicationsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhPublications" breadCrumbKey="dataResources / gmhPublications" />
                <GMHPublicationsContent />
            </LayoutV1>
        </>
    );
}

