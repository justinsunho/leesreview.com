import React from "react";
import { Link } from "gatsby";
import { Button } from "components/atoms";
import styles from "./styles.module.scss";

const TextBlock = ({ headingTag, headingText, description, linkText, linkHref, button, className }) => {
    const Heading = headingTag;

    return (
        <div className={`${className} ${styles.textBlock}`}>
            <Heading className={styles.heading}>{headingText}</Heading>
            <p className={styles.paragraph}>{description}</p>
            {linkHref && linkText && button ? (
                <Button to={linkHref}>{linkText}</Button>
            ) : (
                <Link to={linkHref}>{linkText}</Link>
            )}
        </div>
    );
};

export default TextBlock;
