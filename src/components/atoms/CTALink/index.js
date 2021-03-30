import React from "react";
import { arrow, primaryStyle, primarySvg } from "./styles.module.scss";

const CTALink = ({ children, className, linkHref, primary, style }) => {
    const Tag = linkHref ? "a" : "div";

    return (
        <Tag className={`${className} ${primary && primaryStyle}`} href={linkHref} style={style}>
            {children}
            {primary ? (
                <svg
                    className={primarySvg}
                    fill="none"
                    height="42"
                    viewBox="0 0 76 42"
                    width="76"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.0331 23.4521L0.112305 0H13.3813L37.142 23.4521L13.3813 44.4356H0.112305L26.0331 23.4521Z"
                        fill="#F9B953"
                    />
                    <path
                        d="M35.9081 23.4521L9.9873 0H23.2563L47.017 23.4521L23.2563 44.4356H9.9873L35.9081 23.4521Z"
                        fill="#F9B953"
                    />
                    <path d="M55 23.2222L29 0H42.3095L68 23.2222L42.3095 44H29L55 23.2222Z" fill="#FFCA55" />
                </svg>
            ) : (
                <svg
                    className={arrow}
                    fill="currentColor"
                    height="10"
                    viewBox="0 0 8 12"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1.70498 0L0.294983 1.41L4.87498 6L0.294983 10.59L1.70498 12L7.70498 6L1.70498 0Z" />
                </svg>
            )}
        </Tag>
    );
};

export default CTALink;
