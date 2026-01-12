"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import UNProgramsProjectsContent from "@/components/project/UNProgramsProjectsContent";

export default function UNProgramsProjectsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="unProgramsProjects" breadCrumbKey="projectsProgrammes / unProgramsProjects" />
                <UNProgramsProjectsContent />
            </LayoutV1>
        </>
    );
}

