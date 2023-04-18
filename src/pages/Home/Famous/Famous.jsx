import React from "react";
// Images
import { Images } from "../../../Constants";
// Styles
import "./Famous.scss";

const Famous = () => {
    return (
        <section className="famous">
            <div className="container">
                <div className="item">
                    <span className="category">Big Screen</span>
                    <h2 className="title">Smart Watch Series 7</h2>
                    <p className="text">From $399 or $16.62/mo. for 24mo*</p>
                    <img src={Images.SmartWatch} alt="smart watch" />
                </div>
                <div className="item">
                    <span className="category">Studio Display</span>
                    <h2 className="title">600 nits of brightness.</h2>
                    <p className="text">27-inch 5k Retina display</p>
                    <img src={Images.Laptop} alt="laptop" />
                </div>
                <div className="item">
                    <span className="category">Smartphones</span>
                    <h2 className="title">Smartphone 13 pro.</h2>
                    <p className="text">
                        Now in Green. From $999 or $41.62/mo. for 24mo*
                    </p>
                    <img src={Images.Iphone} alt="iphone" />
                </div>
                <div className="item">
                    <span className="category">Home Speakers</span>
                    <h2 className="title">Room-filling sound.</h2>
                    <p className="text">From $699 or $116.58/mo for 12 mo*</p>
                    <img src={Images.HomePod} alt="home pod" />
                </div>
            </div>
        </section>
    );
};

export default Famous;
