import React from "react";

import "./Services.scss";

import { services } from "../../../utils/Data";

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                {services.map(({ image, title, desc }, i) => (
                    <div key={i} className="service">
                        <div className="icon">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="title">{title}</div>
                            <div className="desc">{desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
