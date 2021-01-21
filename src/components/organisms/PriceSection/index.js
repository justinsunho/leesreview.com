import React from "react";
import { TextBlock } from "components/molecules";
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
                        <TextBlock
                            headingTag={"h3"}
                            headingText={item.price}
                            subtitle={item.title}
                            description={item.description}
                            inView={true}
                            className={`${styles.priceTextBlock}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceSection;
