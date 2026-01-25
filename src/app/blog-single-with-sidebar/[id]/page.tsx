import LayoutV1 from "@/components/layouts/LayoutV1";
import BlogSinglePageWrapper from "@/components/blog/BlogSinglePageWrapper";

export const metadata = {
    title: "Green Mongolia Hub - News Article"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebarPage = async ({ params }: PageProps) => {

    const { id } = await params;

    return (
        <>
            <LayoutV1>
                <BlogSinglePageWrapper newsId={id} />
            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebarPage;