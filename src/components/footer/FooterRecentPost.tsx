import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    full_date?: string;
    thumb?: string;
}

const FooterRecentPost = ({ blog }: { blog: DataType }) => {
    const { id, title, full_date, thumb } = blog;

    // Handle image URL - can be full URL or relative path
    const imageSrc = thumb 
        ? (thumb.startsWith('http') || thumb.startsWith('/') 
            ? thumb 
            : `/assets/img/thumbs/${thumb}`)
        : '/assets/img/blog/default-thumb.jpg';
    
    // Check if it's a Directus URL (external URL)
    const isDirectusUrl = imageSrc.startsWith('http');

    return (
        <>
            <li>
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image 
                            src={imageSrc} 
                            alt={title || "Article"} 
                            width={400} 
                            height={400} 
                            className="h-auto"
                            unoptimized={isDirectusUrl}
                        />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{full_date}</span>
                    </div>
                    <h5>
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            {title}
                        </Link>
                    </h5>
                </div>
            </li>
        </>
    );
};

export default FooterRecentPost;