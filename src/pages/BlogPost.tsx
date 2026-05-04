import { useParams } from "react-router-dom";
import { posts } from "../library/posts";

function BlogPost() {
    // DESTRUCTURE TO PULL SLUG VALUE FROM USEPARAMS OBJECT
    const { slug } = useParams();

    // RETURN POST WITH SLUG MATCHING URL PARAM
    const post = posts.find(
        (p) => p.slug === slug
    );

    if (!post) {
        return (
            <div className="page">
                <h2>Post not found</h2>
            </div>
        )
    }

    return (
        <div className="page">
            <div className="post">
                <h2>{post.title}</h2>
                
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default BlogPost;