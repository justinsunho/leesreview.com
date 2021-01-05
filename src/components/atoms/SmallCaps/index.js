import React from "react";
import styles from "./styles.module.scss";

const SmallCaps = ({ className, children }) => {
    return <span className={`${styles.smallCaps} ${className && className}`}>{children}</span>;
};

export default SmallCaps;
