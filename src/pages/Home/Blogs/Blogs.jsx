import React from "react";
// Components
import BlogCard from "../../../Components/BlogCard/BlogCard";
// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Styles
import "./Blogs.scss";

const Blogs = ({ title, blogs }) => {
    return (
        <section className="blogs">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="right">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="blog_cards">
                    {blogs.map(({ id, image, title, date, content }) => (
                        <BlogCard
                            key={id}
                            id={id}
                            image={image}
                            title={title}
                            date={date}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
