import React from "react";
import styles from "./styles.module.scss";

const CTALink = ({ children, linkHref }) => {
    const Tag = linkHref ? "a" : "div";

    return (
        <Tag href={linkHref} className={styles.link}>
            {children}
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.70498 0L0.294983 1.41L4.87498 6L0.294983 10.59L1.70498 12L7.70498 6L1.70498 0Z"
                    fill="#2F80ED"
                />
            </svg>
        </Tag>
    );
};

export default CTALink;