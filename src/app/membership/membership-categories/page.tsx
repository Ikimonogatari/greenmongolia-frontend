import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "GMH - Membership categories"
};

const MembershipCategoriesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Membership categories" breadCrumb="Membership / Membership categories" />
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

export default MembershipCategoriesPage;

