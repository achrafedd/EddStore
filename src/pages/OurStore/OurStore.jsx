import React from "react";
// Routers
import { Link } from "react-router-dom";
// Components
import ProductCard from "../../Components/ProductCard/ProductCard";
// Data
import { productsItems, categories } from "../../utils/Data";
// Styles
import "./OurStore.scss";

const OurStore = () => {
    return (
        <div className="our-store">
            <div className="container">
                <div className="left">
                    <div className="top">
                        <h2 className="title">Shop By Category</h2>
                        <div className="categories">
                            {categories.map(({ title }, i) => (
                                <Link key={i} className="link" to="/our-store">
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="bottom">
                        <h2 className="title">Filter By</h2>
                        <div className="filter">
                            <h3 className="filter-title">Avialability</h3>
                            <div className="items">
                                <div className="item">
                                    <input
                                        type="checkbox"
                                        name="on-stock"
                                        id="on-stock"
                                    />
                                    <label htmlFor="on-stock">
                                        On Stock (0)
                                    </label>
                                </div>
                                <div className="item">
                                    <input
                                        type="checkbox"
                                        name="out-of-stock"
                                        id="out-of-stock"
                                    />
                                    <label htmlFor="out-of-stock">
                                        Out Of Stock (20)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter">
                            <h3 className="filter-title">Price</h3>
                            <div className="items">
                                <div className="item">
                                    <span>$</span>
                                    <input type="number" placeholder="From" />
                                </div>
                                <div className="item">
                                    <span>$</span>
                                    <input type="number" placeholder="To" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <span>Sorted By: </span>
                        <select>
                            <option value="best-selling">Best Selling</option>
                            <option value="price-up">Price increase</option>
                            <option value="price-down">Price decrease</option>
                            <option value="name-up">Name increase</option>
                            <option value="name-down">Name decrease</option>
                        </select>
                    </div>
                    <div className="bottom">
                        {productsItems.map((product, i) => (
                            <ProductCard product={product} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStore;
