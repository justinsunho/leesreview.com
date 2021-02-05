import React from "react";
import { a, useSpring } from "react-spring";
import styles from "./styles.module.scss";

const Ribbon = ({ inView, className }) => {
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
            <a.div className={styles.ribbon} style={ribbonSpring} />
        </a.div>
    );
};

export default Ribbon;
