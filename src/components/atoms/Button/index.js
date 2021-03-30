import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

const Button = ({ children, className, linkHref, onClick, secondary, style }) => {
    return linkHref ? (
        <Link
            className={`${styles.button} ${className} ${secondary && styles.secondary}`}
            onClick={onClick}
            onKeyDown={(e) => e.key === "Enter" && onClick}
            role={"button"}
            style={style}
            tabIndex={0}
            to={linkHref}
        >
            {children}
        </Link>
    ) : (
        <div
            className={`${styles.button} ${className}  ${secondary && styles.secondary}`}
            onClick={onClick}
            onKeyDown={(e) => e.key === "Enter" && onClick}
            role={"button"}
            style={style}
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default Button;
