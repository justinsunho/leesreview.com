import React from "react";
import { Card } from "components/molecules";
import utilities from "theme/utilities.module.scss";

const PriceSection = ({ items, title }) => {
    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {items.map((item) => (
                    <div className={`col`}>
                        <Card title={item.price} subtitle={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceSection;
