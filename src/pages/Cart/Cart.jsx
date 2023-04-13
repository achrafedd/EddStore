import React from "react";
// Styles
import "./Cart.scss";

const Cart = () => {
    return (
        <div className="cart">
            <div className="container">
                <div className="products">
                    <div className="product">
                        <div className="product_info"></div>
                        <div className="product_price"></div>
                        <div className="product_qty"></div>
                        <div className="total"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
