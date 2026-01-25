import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsPageWrapper from "@/components/project/ProjectDetailsPageWrapper";

export const metadata = {
    title: "Green Mongolia Hub - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    return (
        <>
            <LayoutV1>
                <ProjectDetailsPageWrapper projectId={id} />
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;