"use client";
import { useGetCouncilMembersQuery, getDirectusImageUrl, getTranslation } from "@/store/api/directusApi";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const TeamV3GraphQL = () => {
    const locale = useLocale();
    const languageCode = locale === "mn" ? "mn-MN" : "en-US";
    const { data: membersData, isLoading, error } = useGetCouncilMembersQuery();

    // Filter and sort council members
    const members = membersData
        ?.filter(member => member.status === "published")
        ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];

    if (isLoading) {
        return (
            <div className="farmer-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading team members...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || members.length === 0) {
        return (
            <div className="farmer-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="alert alert-info">
                                <h4>No Team Members Found</h4>
                                <p>There are no team members available at the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="farmer-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {members.map(member => {
                                    const translation = getTranslation(member.translations, languageCode);
                                    const photoUrl = getDirectusImageUrl(member.photo);
                                    const fullName = translation 
                                        ? `${translation.first_name || ""} ${translation.last_name || ""}`.trim()
                                        : "Team Member";
                                    
                                    return (
                                        <div className="col-lg-4 col-md-6 farmer-stye-one" key={member.id}>
                                            <div className="farmer-style-one">
                                                <div className="thumb">
                                                    {photoUrl ? (
                                                        <Image 
                                                            src={photoUrl} 
                                                            alt={fullName} 
                                                            width={350} 
                                                            height={350}
                                                            style={{ objectFit: 'cover' }}
                                                            unoptimized={true}
                                                        />
                                                    ) : (
                                                        <Image 
                                                            src="/assets/img/farmers/1.jpg" 
                                                            alt={fullName} 
                                                            width={350} 
                                                            height={350}
                                                        />
                                                    )}
                                                    {member.email && (
                                                        <div className="social">
                                                            <a href={`mailto:${member.email}`}>
                                                                <i className="fas fa-envelope"></i>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="info">
                                                    <h4>
                                                        <Link href={`#`}>
                                                            {fullName}
                                                        </Link>
                                                    </h4>
                                                    {translation?.role && <span>{translation.role}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3GraphQL;
