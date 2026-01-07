import Blog3ColumnContent from "@/components/blog/Blog3ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import CallToAction from "@/components/cta/CallToAction";
import Counter from "@/components/counter/Counter";

export const metadata = {
    title: "GMH - Events"
};

const EventsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Events" breadCrumb="News & Events / Events" />
                <Blog3ColumnContent />
                <Counter />
                <CallToAction />
            </LayoutV1>
        </>
    );
};

export default EventsPage;

