import React from "react";
// Data
import { Data } from "../../../Constants";
// Styles
import "./Categories.scss";

const Categories = () => {
    const { categories } = Data;
    return (
        <section className="categories">
            <div className="container">
                {categories.map(({ title, image, items }, i) => (
                    <div className="category" key={i}>
                        <div className="content">
                            <h3 className="title">{title}</h3>
                            <div className="items">{items} items</div>
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
