import React from "react";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Tile = ({ icon, title, description, style, className, color }) => {
    return (
        <div className={`${className} ${styles.tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            <div
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: icon }}
                style={{ backgroundColor: `${color}` }}
            />
            <div className={styles.container}>
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
