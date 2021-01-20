import React from "react";
import { CTALink, ImageBackground, SmallCaps } from "components/atoms";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Card = ({ title, className, image, subtitle, description, linkText, linkHref, style, color }) => {
    return (
        // <ImageBackground color={color}>
        <a href={linkHref} className={`${styles.card} ${className}`} style={style}>
            <div className={styles.mainInfo}>
                {image && <Img className={`${styles.image}`} fluid={{ ...image, aspectRatio: 1 }} />}
                <h3 className={styles.heading}>{title}</h3>
            </div>

            <div className={styles.content}>
                {subtitle && <SmallCaps>{subtitle}</SmallCaps>}
                <p className={styles.description}>{description}</p>
            </div>
            {linkHref && <CTALink className={styles.ctaLink}>{linkText}</CTALink>}
        </a>
        // </ImageBackground>
    );
};

export default Card;
