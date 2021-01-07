import React from "react";
import { Button, CTALink, SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const TextBlock = ({ subtitle, headingTag, headingText, description, linkText, linkHref, button, className }) => {
    const Heading = headingTag;

    return (
        <div className={`${className} ${styles.textBlock}`}>
            <SmallCaps>{subtitle}</SmallCaps>
            <Heading className={styles.heading}>{headingText}</Heading>
            <p className={styles.paragraph}>{description}</p>
            {linkHref && linkText && button ? (
                <Button to={linkHref}>{linkText}</Button>
            ) : (
                <CTALink linkHref={linkHref}>{linkText}</CTALink>
            )}
        </div>
    );
};

export default TextBlock;
