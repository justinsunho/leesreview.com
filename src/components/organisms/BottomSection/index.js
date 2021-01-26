import React from "react";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const BottomSection = ({ title, subtitle, description, buttonText, buttonLink }) => {
    return (
        <div className={`section ${styles.bottomSectionWrapper}`}>
            <div className={`${styles.bottomSection}`}>
                <div className={`row`}>
                    <div className={`col-lg-10 col-8`}>
                        <div className={`${styles.textWrapper}`}>
                            <SmallCaps className={`${styles.smallCaps}`}>{subtitle}</SmallCaps>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div
                        className={`col-lg-2 col-4 d-flex align-items-center justify-content-center ${styles.buttonWrapper}`}
                    >
                        <a href={buttonLink}>{buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
