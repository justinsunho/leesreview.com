import React from "react";
import * as styles from "./styles.module.scss";

const ImageBackground = ({ backgroundStyle, children, className, color }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.background} style={{ backgroundColor: color ? color : "#3b7fa8" }} />
            <div className={styles.child} style={{ ...backgroundStyle }}>
                {children}
            </div>
        </div>
    );
};

export default ImageBackground;
