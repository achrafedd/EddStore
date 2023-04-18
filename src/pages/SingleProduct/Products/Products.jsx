import React from "react";
// Components
import ProductCard from "../../../Components/ProductCard/ProductCard";
//Data
import { Data } from "../../../Constants";

const Products = () => {
    const { productsItems } = Data;
    return (
        <div className="products">
            <h2 className="title">You May Also Like</h2>
            <div className="content">
                {productsItems.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Products;
