import React from "react";
import Img from "gatsby-image";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const TestimonyItem = ({ image, tags, title, description, icon }) => {
    return (
        <div className={styles.testimonyItem}>
            <Img
                className={`${styles.image}`}
                fluid={{ ...image.childImageSharp.fluid, aspectRatio: 1 }}
                style={{ position: "absolute" }}
            />
            <div className={styles.content}>
                <div className={styles.tagContainer}>
                    {tags.map((tag) => (
                        <SmallCaps className={styles.tag}>{tag}</SmallCaps>
                    ))}
                </div>
                <h4 className={styles.heading}>{title}</h4>

                <p className={styles.description}>{description}</p>
                <Img className={`${styles.icon}`} fixed={{ ...icon.childImageSharp.fixed }} />
            </div>
        </div>
    );
};

export default TestimonyItem;
