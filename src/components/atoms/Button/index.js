import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

const Button = ({ className, children, linkHref, onClick, style }) => {
    return linkHref ? (
        <Link className={`${styles.button} ${className}`} to={linkHref} style={style} onClick={onClick}>
            {children}
        </Link>
    ) : (
        <div className={`${styles.button} ${className}`} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
