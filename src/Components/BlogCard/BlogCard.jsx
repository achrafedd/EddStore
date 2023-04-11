import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import "./Blogcard.scss";

const BlogCard = ({ id, image, title, date, content }) => {
    return (
        <div className="blog_card">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <span className="date">{new Date(date).toDateString()}</span>
                <h3 className="blog_title">{title}</h3>
                <p className="text">{content.slice(0, 50)}...</p>
                <Link className="btn" to={`blog/${id}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
