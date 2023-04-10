import React from "react";

import { categories } from "../../../utils/Data";

import "./Categories.scss";

const Categories = () => {
    return (
        <div className="categories">
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
        </div>
    );
};

export default Categories;
