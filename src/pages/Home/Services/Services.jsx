import React from "react";

import "./Services.scss";

import { Data } from "../../../Constants";

const Services = () => {
    const { services } = Data;
    return (
        <section className="services">
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
        </section>
    );
};

export default Services;
