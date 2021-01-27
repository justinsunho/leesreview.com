import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

const Button = ({ className, children, linkHref, onClick, style }) => {
    return (
        <Link className={`${styles.button} ${className}`} to={linkHref} style={style} onClick={onClick}>
            {children}
        </Link>
    );
};

export default Button;
