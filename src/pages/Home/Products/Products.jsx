import React from "react";
// Components
import ProductCard from "../../../Components/ProductCard/ProductCard";
// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Styles
import "./Products.scss";

const Products = ({ title, productsItems }) => {
    return (
        <section className="products">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="right">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="products_cards">
                    {productsItems.map(
                        ({ id, title, price, image, brand, rate }, i) => (
                            <ProductCard
                                id={id}
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
        </section>
    );
};

export default Products;
