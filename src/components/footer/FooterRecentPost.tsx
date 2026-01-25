import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: string | number;
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
                <div className="thumb" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                    <Link href={`/blog-single-with-sidebar/${id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                        <Image 
                            src={imageSrc} 
                            alt={title || "Article"} 
                            width={80} 
                            height={80} 
                            style={{ 
                                objectFit: 'cover', 
                                width: '100%', 
                                height: '100%',
                                borderRadius: '5px'
                            }}
                            unoptimized={isDirectusUrl}
                        />
                    </Link>
                </div>
                <div className="info" style={{ paddingLeft: '15px' }}>
                    <div className="meta-title">
                        <span className="post-date" style={{ fontSize: '12px', color: '#ffb606' }}>{full_date}</span>
                    </div>
                    <h5 style={{ 
                        margin: 0, 
                        fontSize: '14px', 
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        <Link href={`/blog-single-with-sidebar/${id}`} style={{ color: 'inherit' }}>
                            {title}
                        </Link>
                    </h5>
                </div>
            </li>
        </>
    );
};

export default FooterRecentPost;