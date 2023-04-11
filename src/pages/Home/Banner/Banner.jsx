import React from "react";

import BannerImage01 from "../../../assets/images/main-banner.jpg";
import BannerImage02 from "../../../assets/images/catbanner-01.jpg";
import BannerImage03 from "../../../assets/images/catbanner-02.jpg";
import BannerImage04 from "../../../assets/images/catbanner-03.jpg";
import BannerImage05 from "../../../assets/images/catbanner-04.jpg";

import "./Banner.scss";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="item">
                    <img src={BannerImage01} alt="banner image" />
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
                    <img src={BannerImage02} alt="banner image" />
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
                    <img src={BannerImage04} alt="banner image" />
                    <div className="content">
                        <span className="title">New Arrival</span>
                        <h2>Buy Ipad Air</h2>
                        <p>
                            From $999.00 or <br /> $41.62/mo. for 24 mo.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={BannerImage03} alt="banner image" />
                    <div className="content">
                        <span className="title">15% Off</span>
                        <h2>Smart Watch 7</h2>
                        <p>
                            From $999.00 or <br /> $41.62/mo. for 24 mo.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={BannerImage05} alt="banner image" />
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
