export interface Post {
    id: number;
    slug: string;
    title: string;
    content: string;
}

export const posts: Post [] = [
    {
        id: 1, 
        slug: "typescript-basics",
        title: "TypeScript Basics",
        content: "TypeScript is a strongly typed superset of JavaScript that adds static typing, interfaces, and better tooling for developers."
    },
    {
        id: 2,
        slug: "react-router-guide",
        title: "React Router Guide",
        content: "Learning dynamic routing with React Router."
    },
    {
        id: 3,
        slug: "protected-routes-in-react",
        title: "Protected Routes in React",
        content: "Protected routes help restrict access to certain pages unless a user is authenticated. This is commonly used for admin dashboards and user settings."
    }
]