import React from "react";
import { smallCaps, altColorStyle } from "./styles.module.scss";

const SmallCaps = ({ children, className, style, altColor }) => {
    return (
        <span className={`${smallCaps} ${className} ${altColor && altColorStyle}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
