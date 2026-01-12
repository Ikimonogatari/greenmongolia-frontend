"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";
import NationalProgramsProjectsContent from "@/components/project/NationalProgramsProjectsContent";

export default function NationalProgramsProjectsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="nationalProgramsProjects" breadCrumbKey="projectsProgrammes / nationalProgramsProjects" />
                <NationalProgramsProjectsContent />
            </LayoutV1>
        </>
    );
}

