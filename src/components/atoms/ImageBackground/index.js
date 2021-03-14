import React from "react";
import { container, background, child } from "./styles.module.scss";

const ImageBackground = ({ className, color, children, backgroundStyle }) => {
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
