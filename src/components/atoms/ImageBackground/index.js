import React from "react";
import { background, child, container } from "./styles.module.scss";

const ImageBackground = ({ backgroundStyle, children, className, color }) => {
    return (
        <div className={`${container} ${className}`}>
            <div className={background} style={{ backgroundColor: color ? color : "#3b7fa8" }} />
            <div className={child} style={{ ...backgroundStyle }}>
                {children}
            </div>
        </div>
    );
};

export default ImageBackground;
