import React from "react";
import Img from "gatsby-image";
import { ImageBackground } from "components/atoms";
import { imageStyle } from "./styles.module.scss";

const Image = ({ image, className, color }) => {
    return (
        <ImageBackground color={color}>
            <Img alt="test" className={`${className} ${imageStyle}`} fluid={image} />
        </ImageBackground>
    );
};

export default Image;
