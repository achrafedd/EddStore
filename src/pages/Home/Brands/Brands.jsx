import React from "react";
// Data
import { Data } from "../../../Constants";
// Style
import "./Brands.scss";

const Brands = () => {
    const { brands } = Data;
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
