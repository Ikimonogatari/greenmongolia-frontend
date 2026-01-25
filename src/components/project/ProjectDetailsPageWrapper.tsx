"use client";
import { useGetProjectByIdQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ProjectDetailsContentGraphQL from "./ProjectDetailsContentGraphQL";

interface ProjectDetailsPageWrapperProps {
    projectId: string;
}

const ProjectDetailsPageWrapper = ({ projectId }: ProjectDetailsPageWrapperProps) => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: project, isLoading } = useGetProjectByIdQuery(projectId);
    
    if (isLoading) {
        return (
            <>
                <BreadCrumb title="Loading..." breadCrumb="project" />
                <div className="container default-padding text-center">
                    <p>Loading project...</p>
                </div>
            </>
        );
    }
    
    if (!project) {
        return (
            <>
                <BreadCrumb title="Project Not Found" breadCrumb="project" />
                <div className="container default-padding text-center">
                    <p>Project not found.</p>
                </div>
            </>
        );
    }
    
    const translation = getTranslation(project.translations, languageCode);
    const coverImageUrl = getDirectusImageUrl(project.cover_image || project.image);
    
    // Truncate title to max 80 characters
    const truncateTitle = (title: string, maxLength: number = 80) => {
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength) + '...';
    };
    
    const translatedTitle = translation?.name || "Untitled Project";
    const breadcrumbTitle = truncateTitle(translatedTitle);
    
    return (
        <>
            <BreadCrumb 
                title={breadcrumbTitle} 
                breadCrumb="project" 
                backgroundImage={coverImageUrl}
                skipTitleTranslation={true}
            />
            <ProjectDetailsContentGraphQL projectId={projectId} />
        </>
    );
};

export default ProjectDetailsPageWrapper;
