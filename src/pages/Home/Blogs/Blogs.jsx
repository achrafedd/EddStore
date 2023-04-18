import React, { useEffect } from "react";
// Components
import { BlogCard } from "../../../Components";
// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Styles
import "./Blogs.scss";

const Blogs = ({ title, blogs }) => {
    let blog_cards;

    useEffect(() => {
        blog_cards = document.querySelector(".blog_cards");
    }, []);

    const preve = () => {
        blog_cards.scrollLeft = blog_cards.scrollLeft - 295;
    };

    const next = () => {
        blog_cards.scrollLeft = blog_cards.scrollLeft + 295;
    };

    return (
        <section className="blogs">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="right">
                        <IoIosArrowBack onClick={preve} />
                        <IoIosArrowForward onClick={next} />
                    </div>
                </div>
                <div className="blog_cards">
                    {blogs.map((blog, i) => (
                        <BlogCard key={i} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
