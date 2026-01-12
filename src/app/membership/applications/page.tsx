"use client";
import BreadCrumbWrapper from "@/components/breadCrumb/BreadCrumbWrapper";
import LayoutV1 from "@/components/layouts/LayoutV1";

export default function ApplicationsPage() {
    return (
        <>
            <LayoutV1>
                <BreadCrumbWrapper titleKey="applications" breadCrumbKey="membership / applications" />
                <div className="container default-padding-top-bottom">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Content will be added here */}
                        </div>
                    </div>
                </div>
            </LayoutV1>
        </>
    );
}

