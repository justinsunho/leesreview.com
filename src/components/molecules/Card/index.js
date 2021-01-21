import React from "react";
import Img from "gatsby-image";
import { a, useSpring, config } from "react-spring";
import { CTALink, SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const Card = ({ title, className, image, subtitle, description, linkText, linkHref, style, color }) => {
    const [spring, set] = useSpring(() => ({
        transform: "translateY(0px)",
        padding: "0.5rem 1rem",
        config: {
            tension: 200,
            mass: 1,
            friction: 20,
        },
    }));

    const AnimatedLink = a(CTALink);

    return (
        <a.a
            href={linkHref}
            className={`${styles.card} ${className}`}
            style={{ ...style, transform: spring.transform }}
            onMouseEnter={() => {
                set({ transform: "translateY(-8px)", padding: "1rem 1rem" });
            }}
            onMouseLeave={() => {
                set({ transform: "translateY(0px)", padding: "0.5rem 1rem" });
            }}
        >
            {image && <Img className={`${styles.image}`} fluid={{ ...image, aspectRatio: 1 }} />}

            <div className={styles.content}>
                <h3 className={styles.heading}>{title}</h3>
                {subtitle && <SmallCaps>{subtitle}</SmallCaps>}
                <p className={styles.description}>{description}</p>
            </div>
            {linkHref && (
                <AnimatedLink className={styles.ctaLink} style={{ backgroundColor: color, padding: spring.padding }}>
                    {linkText}
                </AnimatedLink>
            )}
        </a.a>
    );
};

export default Card;
