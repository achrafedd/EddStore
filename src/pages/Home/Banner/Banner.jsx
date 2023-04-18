import React from "react";
// Images
import { Images } from "../../../Constants";

// Styles
import "./Banner.scss";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="item">
                    <img src={Images.MainBanner} alt="banner image" />
                    <div className="content">
                        <span className="title">Supercharged for Pros.</span>
                        <h2>Special Sales</h2>
                        <p>
                            From $999.00 or $41.62/mo. <br />
                            for 24 mo. footnote*
                        </p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="item">
                    <img src={Images.Banner01} alt="banner image" />
                    <div className="content">
                        <span className="title">Best Sale</span>
                        <h2>Laptop Max</h2>
                        <p>
                            From $999.00 or <br />
                            $41.62/mo.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={Images.Banner02} alt="banner image" />
                    <div className="content">
                        <span className="title">New Arrival</span>
                        <h2>Buy Ipad Air</h2>
                        <p>
                            From $999.00 or <br /> $41.62/mo. for 24 mo.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={Images.Banner03} alt="banner image" />
                    <div className="content">
                        <span className="title">15% Off</span>
                        <h2>Smart Watch 7</h2>
                        <p>
                            From $999.00 or <br /> $41.62/mo. for 24 mo.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={Images.Banner04} alt="banner image" />
                    <div className="content">
                        <span className="title">Free Engraving</span>
                        <h2>Airpods Max</h2>
                        <p>
                            From $999.00 or <br />
                            $41.62/mo. for 24 mo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
