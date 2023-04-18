import React from "react";
// Styles
import "./LegalPages.scss";

const LegalPages = ({ title, content }) => {
    const createMarkup = () => {
        return { __html: content };
    };
    return (
        <div className="legal_pages">
            <div className="container">
                <h2 className="title">{title}</h2>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
        </div>
    );
};

export default LegalPages;
