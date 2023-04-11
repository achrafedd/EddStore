import React from "react";
// Data
import { brands } from "../../../utils/Data";
// Style
import "./Brands.scss";

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                {brands.map(({ id, image, name }) => (
                    <div className="brand" key={id}>
                        <img src={image} alt={name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;
