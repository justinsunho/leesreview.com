import React from "react";
import { CTALink } from "components/atoms";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Card = ({ title, className, image, icon, description, linkText, linkHref }) => {
    return (
        <a href={linkHref} className={`${styles.card} ${className}`}>
            <Img className={`${styles.image}`} fluid={{ ...image, aspectRatio: 1 }} />
            <div className={styles.content}>
                <span className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.description}>{description}</p>
                <CTALink>{linkText}</CTALink>
            </div>
        </a>
    );
};

export default Card;
