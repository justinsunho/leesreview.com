import React from "react";
import Img from "gatsby-image";
import { ImageBackground } from "components/atoms";
import { imageStyle } from "./styles.module.scss";

const Image = ({ image, className, color }) => {
    return (
        <ImageBackground color={color}>
            <Img alt="test" className={`${className} ${image}`} fluid={image} style={imageStyle} />
        </ImageBackground>
    );
};

export default Image;
