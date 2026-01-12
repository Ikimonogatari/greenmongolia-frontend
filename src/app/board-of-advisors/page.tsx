"use client";
import BoardOfAdvisorsContent from "@/components/about/BoardOfAdvisorsContent";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function BoardOfAdvisorsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="boardOfAdvisors" breadCrumbKey="boardOfAdvisors" />
                <BoardOfAdvisorsContent />
            </LayoutV1>
        </>
    );
}

