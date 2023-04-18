import React from "react";

const Description = ({ description }) => {
    return (
        <div className="description">
            <h2 className="title">Description</h2>
            <p className="content">{description}</p>
        </div>
    );
};

export default Description;
