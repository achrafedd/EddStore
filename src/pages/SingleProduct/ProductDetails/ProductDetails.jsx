import React, { useState } from "react";
// Icons
import { AiFillStar } from "react-icons/ai";
// Images
import { Images } from "../../../Constants";

const ProductDetails = ({ product }) => {
    const {
        image,
        title,
        price,
        reviews,
        category,
        brand,
        sku,
        tags,
        availability,
        varient,
    } = product;
    const [qty, setQty] = useState(1);

    const increase = () => {
        if (qty < 10) {
            setQty((prev) => prev + 1);
        }
    };

    const decrease = () => {
        if (qty > 1) {
            setQty((prev) => prev - 1);
        }
    };
    return (
        <div className="product">
            <div className="left">
                <img src={image} alt={title} />
            </div>
            <div className="right">
                <div className="product-details">
                    <p className="product-name">{title}</p>
                    <span className="product-price">${price}</span>
                    <div className="product-reviews">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>({reviews.length} Reviews)</span>
                    </div>
                </div>
                <div className="product-info">
                    <p>
                        <span>Type:</span> {category}
                    </p>
                    <p>
                        <span>Brand:</span> {brand}
                    </p>
                    <p>
                        <span>Tags:</span>
                        {tags.map((tag) => tag + ", ")}
                    </p>
                    <p>
                        <span>SKU:</span> {sku}
                    </p>
                    <p>
                        <span>Availability:</span>
                        {availability ? "On Stock" : "Out Of Stock"}
                    </p>
                    <p>
                        <span>{varient.name}:</span>
                        <span className="values">
                            {varient.values.map((value, i) => (
                                <span key={i} className="value">
                                    {value}
                                </span>
                            ))}
                        </span>
                    </p>
                </div>
                <div className="ctas">
                    <span>Quintity</span>
                    <div className="qty">
                        <div className="number">{qty}</div>
                        <div className="icons">
                            <button onClick={increase}>+</button>
                            <button onClick={decrease}>-</button>
                        </div>
                    </div>
                    <div className="btn">ADD TO CART</div>
                    <div className="btn">Buy It Now</div>
                </div>
                <div className="payment">
                    <h3 className="title">Payment methods</h3>
                    <img src={Images.Payments} alt="payments" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
