import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageBackground } from "components/atoms";
import { imageStyle } from "./styles.module.scss";

const Image = ({ image, className, color, alt }) => {
    return (
        <ImageBackground color={color}>
            <GatsbyImage image={image} alt={`image-${alt}`} className={`${className} ${imageStyle}`} />
        </ImageBackground>
    );
};

export default Image;
