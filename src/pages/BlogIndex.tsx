import { posts } from "../library/posts";

function BlogIndex() {
    return (
        <div>
            <h1>Blog Posts</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id} >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogIndex;