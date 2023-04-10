import React from "react";

import ProductCard from "./ProductCard/ProductCard";

import "./Products.scss";

const Products = ({ title, productsItems }) => {
    return (
        <div className="products">
            <div className="container">
                <h3 className="title">{title}</h3>
                <div className="products_cards">
                    {productsItems.map(
                        ({ title, price, image, brand, rate }, i) => (
                            <ProductCard
                                title={title}
                                price={price}
                                image={image}
                                brand={brand}
                                rate={rate}
                                key={i}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
