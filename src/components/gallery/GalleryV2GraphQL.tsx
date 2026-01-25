"use client";
import { getDirectusImageUrl, getTranslation, useGetProjectsQuery } from "@/store/api/directusApi";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const GalleryV2GraphQL = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const languageCode = locale === "mn" ? "mn-MN" : "en-US";
  
  const { data: projectsData, isLoading, error } = useGetProjectsQuery();
  const galleryRef = useRef(null);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  
  // Get published projects and sort by sort field
  const projects = projectsData
    ?.filter(item => item.status === "published")
    ?.sort((a, b) => (a.sort || 0) - (b.sort || 0)) || [];
  
  const totalImages = projects.length;

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (loadedImagesCount === totalImages && galleryRef.current && totalImages > 0) {
      import("isotope-layout").then((Isotope) => {
        const iso = new Isotope.default(galleryRef.current!, {
          itemSelector: ".gallery-item",
          layoutMode: "masonry",
        });

        setTimeout(() => {
          iso.layout();
        }, 500);

        return () => {
          iso.destroy();
        };
      });
    }
  }, [loadedImagesCount, totalImages]);

  if (isLoading) {
    return (
      <div className="gallery-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                <h2 className="title">{t('gallery.title')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>{t('gallery.loading')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || projects.length === 0) {
    return (
      <div className="gallery-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                <h2 className="title">{t('gallery.title')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>{t('gallery.noProjects')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">{t('gallery.subTitle')}</h5>
                <h2 className="title">{t('gallery.title')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 gallery-content">
              <div className="magnific-mix-gallery gallery-masonary">
                <div
                  id="gallery-masonary"
                  className="gallery-items colums-3"
                  ref={galleryRef}
                >
                  {projects.map((project) => {
                    const translation = getTranslation(project.translations, languageCode);
                    const imageUrl = getDirectusImageUrl(project.cover_image || project.image);
                    
                    return (
                      <div
                        className="gallery-item"
                        key={project.id}
                      >
                        <div className="gallery-style-one">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={translation?.name || "Project"}
                              width={850}
                              height={660}
                              className="h-auto"
                              onLoad={handleImageLoad}
                              style={{ objectFit: 'cover' }}
                              unoptimized={true}
                            />
                          ) : (
                            <Image
                              src="/assets/img/projects/default.jpg"
                              alt={translation?.name || "Project"}
                              width={850}
                              height={660}
                              className="h-auto"
                              onLoad={handleImageLoad}
                            />
                          )}
                          <div className="overlay">
                            {project.start_date && (
                              <p>
                                {new Date(project.start_date).toLocaleDateString(locale, {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </p>
                            )}
                            <h4>
                              <Link href={`/project-details/${project.id}`}>
                                {translation?.name || "Untitled Project"}
                              </Link>
                            </h4>
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
      </div>
    </>
  );
};

export default GalleryV2GraphQL;
