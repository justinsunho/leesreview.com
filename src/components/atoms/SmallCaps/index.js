import React from "react";
import * as styles from "./styles.module.scss";

const SmallCaps = ({ altColor, children, className, style }) => {
    return (
        <span className={`${styles.smallCaps} ${className} ${altColor && styles.altColor}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
