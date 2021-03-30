import React from "react";
import { Link } from "gatsby";
import { button, secondaryStyle } from "./styles.module.scss";

const Button = ({ children, className, linkHref, onClick, secondary, style }) => {
    return linkHref ? (
        <Link
            className={`${button} ${className} ${secondary && secondaryStyle}`}
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
            className={`${button} ${className}  ${secondary && secondaryStyle}`}
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
