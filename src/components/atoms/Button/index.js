import React from "react";
import styles from "./styles.module.scss";

const Button = ({ to, className, children, style, onClick }) => {
    return (
        <a className={`${styles.button} ${className}`} href={to} style={style} onClick={onClick}>
            {children}
        </a>
    );
};

export default Button;
