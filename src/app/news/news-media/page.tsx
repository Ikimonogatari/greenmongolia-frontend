"use client";
import NewsStandardContent from "@/components/blog/NewsStandardContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import CallToAction from "@/components/cta/CallToAction";

export default function NewsMediaPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="newsMedia" breadCrumbKey="newsEvents / newsMedia" />
                <NewsStandardContent />
                <CallToAction />
            </LayoutV1>
        </>
    );
}

