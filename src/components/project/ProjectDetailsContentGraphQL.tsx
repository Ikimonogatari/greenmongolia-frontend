"use client";
import { useGetProjectByIdQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import Image from "next/image";
import "./ProjectDetailsContentGraphQL.css";

interface ProjectDetailsContentGraphQLProps {
    projectId: string;
}

const ProjectDetailsContentGraphQL = ({ projectId }: ProjectDetailsContentGraphQLProps) => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    
    const { data: project, isLoading, error } = useGetProjectByIdQuery(projectId);
    
    if (isLoading) {
        return (
            <div className="project-details-style-one default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Loading project details...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    if (error || !project) {
        return (
            <div className="project-details-style-one default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Project not found.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    const translation = getTranslation(project.translations, languageCode);
    const coverImageUrl = getDirectusImageUrl(project.cover_image || project.image);
    
    return (
        <div className="project-details-style-one default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-details-top">
                            {coverImageUrl ? (
                                <Image 
                                    src={coverImageUrl} 
                                    alt={translation?.name || "Project"} 
                                    width={1920} 
                                    height={865}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    unoptimized={true}
                                />
                            ) : (
                                <Image 
                                    src="/assets/img/projects/default.jpg" 
                                    alt="Project" 
                                    width={1920} 
                                    height={865}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="project-detail-content">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="project-info bg-theme-secondary text-light">
                                {project.start_date && (
                                    <li>
                                        <h4>{locale === "mn" ? "Эхэлсэн огноо" : "Start Date"}</h4> 
                                        {new Date(project.start_date).toLocaleDateString(locale, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </li>
                                )}
                                <li>
                                    <h4>{locale === "mn" ? "Төрөл" : "Category"}</h4> 
                                    {locale === "mn" ? "Төсөл" : "Project"}
                                </li>
                                <li>
                                    <h4>{locale === "mn" ? "Статус" : "Status"}</h4> 
                                    {project.status === "published" 
                                        ? (locale === "mn" ? "Идэвхтэй" : "Active")
                                        : (locale === "mn" ? "Драфт" : "Draft")
                                    }
                                </li>
                                {project.date_created && (
                                    <li>
                                        <h4>{locale === "mn" ? "Үүсгэсэн" : "Created"}</h4> 
                                        {new Date(project.date_created).toLocaleDateString(locale, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="col-lg-8 pl-80 pl-md-15 pl-xs-15 mt-md-50 mt-xs-30">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>{translation?.name || "Untitled Project"}</h3>
                                        </div>
                                        <div className="right-info">
                                            {translation?.description && (
                                                <p>
                                                    {translation.description}
                                                </p>
                                            )}
                                            {translation?.body && (
                                                <div 
                                                    dangerouslySetInnerHTML={{ __html: translation.body }}
                                                    className="project-body-content"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsContentGraphQL;
