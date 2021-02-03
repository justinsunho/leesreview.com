import React from "react";
import { Link } from "gatsby";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const BottomSection = ({ title, subtitle, description, buttonText, buttonLink }) => {
    return (
        <div className={`section ${styles.section}`}>
            <div className={`${styles.bottomSectionWrapper}`}>
                <div className={`row flex-md-row flex-column ${styles.bottomSection}`}>
                    <div className={`col-lg-10 col-md-8`}>
                        <div className={`${styles.textWrapper}`}>
                            <SmallCaps className={`${styles.smallCaps}`}>{subtitle}</SmallCaps>
                            <h2 className={styles.heading}>{title}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                    <div
                        className={`col-lg-2 col-md-4 d-flex align-items-center justify-content-center ${styles.buttonWrapper}`}
                    >
                        <Link to={buttonLink}>{buttonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
