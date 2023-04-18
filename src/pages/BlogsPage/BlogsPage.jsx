import React from "react";
// Components
import BlogCard from "../../Components/BlogCard/BlogCard";
// Data
import { Data } from "../../Constants";
// Styles
import "./BlogsPage.scss";

const BlogsPage = () => {
    const { blogs } = Data;
    return (
        <div className="blogs-page">
            <div className="container">
                <div className="blogs">
                    {blogs.map((blog, i) => (
                        <BlogCard blog={blog} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
