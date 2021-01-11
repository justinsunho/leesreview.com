import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

const Button = ({ to, children, style }) => {
    return (
        <Link className={styles.button} to={to} style={style}>
            {children}
        </Link>
    );
};

export default Button;
