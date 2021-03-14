import React from "react";
import { a, useSpring } from "react-spring";
import Img from "gatsby-image";
import { ribbonContainer, ribbon, imageStyle } from "./styles.module.scss";

const Ribbon = ({ inView, className, image }) => {
    const ribbonSpring = useSpring({
        from: {
            width: "0%",
            padding: "0rem 0rem",
        },
        to: {
            width: inView ? "100%" : "0%",
            padding: inView ? "0rem 100rem" : "0rem 0rem",
        },
    });

    return (
        <a.div className={`${ribbonContainer} ${className}`}>
            <a.div className={ribbon}>
                <Img alt="test" className={imageStyle} fluid={image} style={{ position: "absolute" }} />
            </a.div>
        </a.div>
    );
};

export default Ribbon;
