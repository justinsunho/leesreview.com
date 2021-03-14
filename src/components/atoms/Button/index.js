import React from "react";
import { Link } from "gatsby";
import { button } from "./styles.module.scss";

const Button = ({ className, children, linkHref, onClick, style }) => {
    return linkHref ? (
        <Link className={`${button} ${className}`} to={linkHref} style={style} onClick={onClick}>
            {children}
        </Link>
    ) : (
        <div className={`${button} ${className}`} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
