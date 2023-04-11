import React, { useEffect } from "react";
// Components
import BlogCard from "../../../Components/BlogCard/BlogCard";
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
