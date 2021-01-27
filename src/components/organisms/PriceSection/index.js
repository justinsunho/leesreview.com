import React from "react";
import { SectionWrapper, ClassCard } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const PriceSection = ({ items, title }) => {
    return (
        <SectionWrapper className={`${styles.background}`} title={title}>
            <div className={`row`}>
                {items.map((item) => (
                    <div className={`col-md pb-5`}>
                        <ClassCard title={item.title} date={``} description={item.description} price={item.price} />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PriceSection;
