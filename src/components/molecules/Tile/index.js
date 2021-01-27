import React from "react";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Tile = ({ image, title, description, style, className }) => {
    return (
        <div className={`${className} ${styles.tileContainer}`} style={style}>
            <Img className={styles.image} style={{ position: "absolute" }} fluid={image} />
            <div className={styles.container}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
