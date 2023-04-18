import React, { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Icons
import { BsFillTrashFill } from "react-icons/bs";
// Styles
import "./Cart.scss";

const Cart = () => {
    const [qty, setQty] = useState(1);
    const total = 100;
    const product = {
        id: 1,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        title: "Iphone 14dfsqdfqsdfqsdfs qdfdsfsdfs dfsdfsdf sdfsdfsdfsd",
        price: 100,
        description: "good phone",
        category: "phone",
        brand: "Apple",
        rate: 4.8,
    };

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
        <div className="cart">
            <div className="container">
                <div className="haeding">
                    <div className="item">Product</div>
                    <div className="item">Price</div>
                    <div className="item">Quintity</div>
                    <div className="item">Total</div>
                </div>
                <div className="products">
                    <div className="product">
                        <div className="product_info">
                            <div className="title">Product</div>
                            <div className="image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="box">
                                <div className="product_name">
                                    {product.title}
                                </div>
                                <div className="product_varient">
                                    <span>Size: S</span>
                                    <span>Color: Black</span>
                                </div>
                            </div>
                        </div>
                        <div className="title">Price</div>
                        <div className="product_price">${product.price}</div>
                        <div className="title">Quintity</div>
                        <div className="product_qty">
                            <div className="icons">
                                <button onClick={increase}>+</button>
                                <button onClick={decrease}>-</button>
                            </div>
                            <div className="number">{qty}</div>
                            <div className="delete">
                                <BsFillTrashFill />
                            </div>
                        </div>

                        <div className="title">Total</div>
                        <div className="total">${product.price * qty}</div>
                    </div>
                </div>
                <div className="cart_footer">
                    <div className="left">
                        <Link to="/our-store" className="btn">
                            Continue Shopping
                        </Link>
                        <p>Order special instruction</p>
                    </div>
                    <div className="right">
                        <p>
                            Subtotal: <span>${total}</span>
                        </p>
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to="/checkout" className="btn">
                            Check Out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
