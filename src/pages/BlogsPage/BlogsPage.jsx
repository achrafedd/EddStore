import React from "react";
// Components
import BlogCard from "../../Components/BlogCard/BlogCard";
// Data
import { blogs } from "../../utils/Data";
// Styles
import "./BlogsPage.scss";

const BlogsPage = () => {
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
