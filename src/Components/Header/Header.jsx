import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import {
    AiOutlineSearch,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="right">
                        <p className="header-msg">
                            Free Shipping over $100 & Free Returns
                        </p>
                    </div>
                    <div className="left">
                        <a className="phone" href="tel:+212 601020304">
                            +212 601020304
                        </a>
                        <span className="lang">
                            English
                            <IoIosArrowDown />
                        </span>
                        <span className="currency">
                            $ USD
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className="header-center">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            <h1>
                                <Link to="/">EddStore.</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="center">
                        <input
                            type="text"
                            placeholder="Search Products Here..."
                        />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </div>
                    <div className="right">
                        <div className="box">
                            <BsArrowRepeat />
                            <span className="text">
                                Compare <br /> Products
                            </span>
                        </div>
                        <div className="box">
                            <AiOutlineHeart />
                            <span className="text">
                                Favourite <br /> Wishlist
                            </span>
                        </div>
                        <div className="box">
                            <AiOutlineUser />
                            <span className="text">
                                LogiIn <br /> My Account
                            </span>
                        </div>
                        <div className="box">
                            <AiOutlineShoppingCart />
                            <span className="text">
                                <span className="count">0</span> <br />
                                <span className="total">$100</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="drop-down">
                        <CgMenuGridO />
                        <span>shop categories</span>
                        <IoIosArrowDown />
                    </div>
                    <nav className="menu">
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/our-store" className="link">
                            Our Store
                        </Link>
                        <Link to="/blogs" className="link">
                            Blogs
                        </Link>
                        <Link to="/contact" className="link">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
