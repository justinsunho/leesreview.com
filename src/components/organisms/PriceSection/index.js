import React from "react";
import { TextBlock, ClassCard } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const PriceSection = ({ items, title }) => {
    return (
        <div className={`section ${styles.background}`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {items.map((item) => (
                    <div className={`col-md`}>
                        <ClassCard title={item.title} date={``} description={item.description} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceSection;
