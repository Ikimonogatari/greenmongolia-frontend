"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import GMHBoardContent from "@/components/governance/GMHBoardContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function GMHBoardPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhBoard" breadCrumbKey="governance" />
                <GMHBoardContent />
            </LayoutV1>
        </>
    );
}

