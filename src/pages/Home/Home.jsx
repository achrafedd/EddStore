import React from "react";
// Components
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Famous from "./Famous/Famous";
import Brands from "./Brands/Brands";
import Blogs from "./Blogs/Blogs";
// Data
import { productsItems, blogs } from "../../utils/Data";
// Style
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
                class_name={"card_one"}
            />
            <Famous />
            <Products
                title="Our Popular Products"
                productsItems={productsItems}
                class_name={"card_tow"}
            />
            <Brands />
            <Blogs title="Our Latest News" blogs={blogs} />
        </div>
    );
};

export default Home;
