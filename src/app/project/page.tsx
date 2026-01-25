import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import GalleryV2GraphQL from '@/components/gallery/GalleryV2GraphQL';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Agrica - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title='Recent Projects' breadCrumb='Project' />
                <GalleryV2GraphQL />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;