import React from "react";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Tile = ({ image, title, description, style, className, color }) => {
    return (
        <div className={`${className} ${styles.tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            <Img className={styles.image} style={{ position: "absolute" }} fluid={image} />
            <div className={styles.container}>
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
