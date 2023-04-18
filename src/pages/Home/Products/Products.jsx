import React, { useEffect } from "react";
// Components
import { ProductCard } from "../../../Components";
// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Styles
import "./Products.scss";

const Products = ({ title, productsItems, class_name }) => {
    let products_cards;

    useEffect(() => {
        products_cards = document.querySelector(`.${class_name}`);
    }, []);

    const preve = () => {
        products_cards.scrollLeft = products_cards.scrollLeft - 236;
    };

    const next = () => {
        products_cards.scrollLeft = products_cards.scrollLeft + 236;
    };
    return (
        <section className="products">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="right">
                        <IoIosArrowBack className="preve" onClick={preve} />
                        <IoIosArrowForward className="next" onClick={next} />
                    </div>
                </div>
                <div className={`products_cards ${class_name}`}>
                    {productsItems.map((product, i) => (
                        <ProductCard product={product} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
