import React from "react";
import utilities from "theme/utilities.module.scss";

const PriceSection = ({ items, title }) => {
    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            {items.map((item) => (
                <div className={`row`}>
                    <div className={`col`}>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                </div>
            ))}
        </div>
    );
};

export default PriceSection;
