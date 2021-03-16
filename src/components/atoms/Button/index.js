import React from "react";
import { Link } from "gatsby";
import { button, secondaryStyle } from "./styles.module.scss";

const Button = ({ className, children, linkHref, onClick, style, secondary }) => {
    return linkHref ? (
        <Link
            className={`${button} ${className} ${secondary && secondaryStyle}`}
            to={linkHref}
            style={style}
            onClick={onClick}
        >
            {children}
        </Link>
    ) : (
        <div className={`${button} ${className}  ${secondary && secondaryStyle}`} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
