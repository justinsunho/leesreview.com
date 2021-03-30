import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageBackground } from "components/atoms";
import { imageStyle } from "./styles.module.scss";

const Image = ({ alt, className, color, image }) => {
    return (
        <ImageBackground color={color}>
            <GatsbyImage alt={`image-${alt}`} className={`${className} ${imageStyle}`} image={image} />
        </ImageBackground>
    );
};

export default Image;
