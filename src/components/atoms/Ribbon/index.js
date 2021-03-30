import React from "react";
import { a, useSpring } from "react-spring";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";

const Ribbon = ({ alt, className, image, inView }) => {
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
        <a.div className={`${styles.ribbonContainer} ${className}`}>
            {image ? (
                <a.div className={`${styles.ribbonImage}`}>
                    <GatsbyImage
                        alt={`ribbon-image-${alt}`}
                        className={styles.image}
                        image={image}
                        style={{ position: "absolute" }}
                    />
                </a.div>
            ) : (
                <a.div className={`${styles.ribbon}`} style={ribbonSpring} />
            )}
        </a.div>
    );
};

export default Ribbon;
