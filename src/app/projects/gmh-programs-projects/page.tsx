"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import GMHProgramsProjectsContent from "@/components/project/GMHProgramsProjectsContent";

export default function GMHProgramsProjectsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="gmhProgramsProjects" breadCrumbKey="projectsProgrammes / gmhProgramsProjects" />
                <GMHProgramsProjectsContent />
            </LayoutV1>
        </>
    );
}

