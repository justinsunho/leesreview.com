import React from "react";
import { smallCaps } from "./styles.module.scss";

const SmallCaps = ({ children, className, style }) => {
    return (
        <span className={`${smallCaps} ${className}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
