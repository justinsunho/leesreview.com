import React from "react";
import Img from "gatsby-image";

const Image = ({ image, className }) => {
    return <Img alt="test" className={className} fluid={image} />;
};

export default Image;
