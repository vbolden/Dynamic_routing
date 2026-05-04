import { posts } from "../library/posts";
import { Link } from "react-router-dom";

function BlogIndex() {
    return (
        <div className="page">
            <h1>Blog Posts</h1>

            <div className="posts-container">
                {posts.map((post) => (
                    <Link 
                    to={`/blog/${post.slug}`}
                    key={post.id}
                    className="post-card" 
                    >
                        <h2>{post.title}</h2>
                        <p>Click to read more...</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogIndex;