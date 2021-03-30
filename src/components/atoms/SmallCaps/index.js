import React from "react";
import { smallCaps, altColorStyle } from "./styles.module.scss";

const SmallCaps = ({ altColor, children, className, style }) => {
    return (
        <span className={`${smallCaps} ${className} ${altColor && altColorStyle}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
