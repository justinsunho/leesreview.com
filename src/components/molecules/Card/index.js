import React from "react";
import { CTALink, ImageBackground } from "components/atoms";
import Img from "gatsby-image";
import styles from "./styles.module.scss";

const Card = ({ title, className, image, icon, description, linkText, linkHref, style, color }) => {
    return (
        <ImageBackground color={color}>
            <a href={linkHref} className={`${styles.card} ${className}`} style={style}>
                <Img className={`${styles.image}`} fluid={{ ...image, aspectRatio: 1 }} />

                <div className={styles.content}>
                    <span className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
                    <h4 className={styles.heading}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                    <CTALink className={styles.ctaLink}>{linkText}</CTALink>
                </div>
            </a>
        </ImageBackground>
    );
};

export default Card;
