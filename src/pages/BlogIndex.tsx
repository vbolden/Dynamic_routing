import { posts } from "../library/posts";
import { Link } from "react-router-dom";

function BlogIndex() {
    return (
        <div>
            <h1>Blog Posts</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id} >
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogIndex;