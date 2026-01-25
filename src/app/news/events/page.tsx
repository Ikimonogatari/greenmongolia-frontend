"use client";
import Events3ColumnContent from "@/components/blog/Events3ColumnContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import CallToAction from "@/components/cta/CallToAction";

export default function EventsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="events" breadCrumbKey="newsEvents / events" />
                <Events3ColumnContent />
                <CallToAction />
            </LayoutV1>
        </>
    );
}

