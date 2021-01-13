import React from "react";
import styles from "./styles.module.scss";

const SmallCaps = ({ className, children, style }) => {
    return (
        <span className={`${styles.smallCaps} ${className}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
