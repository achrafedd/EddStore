import React from "react";
// Syles
import "./SingleProduct.scss";
// Components
import ProductDetails from "./ProductDetails/ProductDetails";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";
import Products from "./Products/Products";

const SingleProduct = ({ product }) => {
    return (
        <div className="single-product">
            <div className="container">
                <ProductDetails product={product} />
                <Description description={product.description} />
                <Reviews reviews={product.reviews} />
                <Products />
            </div>
        </div>
    );
};

export default SingleProduct;
