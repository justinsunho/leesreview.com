import React from "react";
import * as styles from "./styles.module.scss";

const CTALink = ({ children, className, linkHref, style }) => {
    const Tag = linkHref ? "a" : "div";

    return (
        <Tag className={`${className}`} href={linkHref} style={style}>
            {children}
            <svg
                className={styles.arrow}
                fill="currentColor"
                height="10"
                viewBox="0 0 8 12"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.70498 0L0.294983 1.41L4.87498 6L0.294983 10.59L1.70498 12L7.70498 6L1.70498 0Z" />
            </svg>
        </Tag>
    );
};

export default CTALink;
