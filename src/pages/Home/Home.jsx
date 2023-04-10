import React from "react";

import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Categories from "./Categories/Categories";
import Products from "../../Components/Products/Products";

import { productsItems } from "../../utils/Data";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Services />
            <Categories />
            <Products
                title="Featured Collection"
                productsItems={productsItems}
            />
        </div>
    );
};

export default Home;
