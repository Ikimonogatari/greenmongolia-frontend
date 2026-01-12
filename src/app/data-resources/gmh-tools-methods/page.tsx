"use client";
import GMHToolsMethodsContent from "@/components/resources/GMHToolsMethodsContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function GMHToolsMethodsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhToolsMethods" breadCrumbKey="dataResources / gmhToolsMethods" />
                <GMHToolsMethodsContent />
            </LayoutV1>
        </>
    );
}

