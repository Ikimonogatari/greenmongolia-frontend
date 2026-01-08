import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "GMH - Careers"
};

const CareersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Careers" breadCrumb="Careers" />
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
};

export default CareersPage;

