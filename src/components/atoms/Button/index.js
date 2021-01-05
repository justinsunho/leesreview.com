import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

const Button = ({ to, children }) => {
    return (
        <Link className={styles.button} to={to}>
            {children}
        </Link>
    );
};

export default Button;
