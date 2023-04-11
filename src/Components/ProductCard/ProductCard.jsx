import React from "react";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, image, brand, rate }) => {
    return (
        <div className="product_card">
            <div className="wishlist">
                <AiOutlineHeart />
            </div>
            <div className="image">
                <Link to={`product/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="product_detailes">
                <span className="brand">{brand}</span>
                <Link to={`product/${id}`}>
                    <h3 className="product_title">{title}</h3>
                </Link>
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
