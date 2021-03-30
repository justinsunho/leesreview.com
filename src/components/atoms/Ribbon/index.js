import React from "react";
import { a, useSpring } from "react-spring";
import { GatsbyImage } from "gatsby-plugin-image";
import { ribbonContainer, ribbon, ribbonImage, imageStyle } from "./styles.module.scss";

const Ribbon = ({ inView, className, image, alt }) => {
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
            {image ? (
                <a.div className={`${ribbonImage}`}>
                    <GatsbyImage
                        image={image}
                        alt={`ribbon-image-${alt}`}
                        className={imageStyle}
                        style={{ position: "absolute" }}
                    />
                </a.div>
            ) : (
                <a.div className={`${ribbon}`} style={ribbonSpring} />
            )}
        </a.div>
    );
};

export default Ribbon;
