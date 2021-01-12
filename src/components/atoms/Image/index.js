import React from "react";
import Img from "gatsby-image";
import { ImageBackground } from "components/atoms";
import styles from "./styles.module.scss";

const Image = ({ image, className, style }) => {
    return (
        <ImageBackground className={style.container}>
            <Img alt="test" className={`${className} ${styles.image}`} fluid={image} />
        </ImageBackground>
    );
};

export default Image;
