import React from "react";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import "./ProductCard.scss";

const ProductCard = ({ title, price, image, brand, rate }) => {
    return (
        <div className="product_card">
            <div className="wishlist">
                <AiOutlineHeart />
            </div>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="product_detailes">
                <span className="brand">{brand}</span>
                <h3 className="product_title">{title}</h3>
                <div className="rate">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>{rate}</span>
                </div>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
