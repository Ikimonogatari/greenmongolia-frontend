import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    date: {
        day: string;
        month: string;
        year: string;
    };
    author?: string;
    full_date?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, author, full_date, title } = blog;

    // Handle image URL - can be full URL or relative path
    const getImageSrc = () => {
        if (!thumb) return "/assets/img/blog/default-thumb.jpg";
        if (thumb.startsWith('http') || thumb.startsWith('/')) {
            return thumb;
        }
        return `/assets/img/blog/${thumb}`;
    };

    const imageSrc = getImageSrc();
    const isDirectusUrl = imageSrc.startsWith('http');

    return (
        <div className="blog-style-one">
            <div className="thumb">
                <Link href={`/blog-single-with-sidebar/${id}`}>
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        width={900} 
                        height={600} 
                        className="h-auto"
                        unoptimized={isDirectusUrl}
                    />
                </Link>
                <div className="date">
                    <strong>{date.day}</strong> <span>{date.month}, {date.year}</span>
                </div>
            </div>
            <div className="info">
                <div className="meta">
                    <ul>
                        <li>
                            <Link href="#" scroll={false}>{author || "Admin"}</Link>
                        </li>
                        <li>{full_date}</li>
                    </ul>
                </div>
                <h3 className="post-title">
                    <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                </h3>
                <Link href={`/blog-single-with-sidebar/${id}`} className="button-regular">
                    Continue Reading <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV1;