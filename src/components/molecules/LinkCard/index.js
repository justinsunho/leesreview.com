import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useSpring } from "react-spring";
import { CTALink, SmallCaps } from "components/atoms";
import * as styles from "./styles.module.scss";

const LinkCard = ({ className, color, description, image, linkHref, linkText, style, subtitle, title }) => {
    const [spring, set] = useSpring(() => ({
        transform: "translateY(0px)",
        config: {
            tension: 200,
            mass: 1,
            friction: 20,
        },
    }));

    const AnimatedLink = a(CTALink);

    return (
        <a.a
            className={`${styles.card} ${className}`}
            href={linkHref}
            onMouseEnter={() => {
                set({ transform: "translateY(-8px)" });
            }}
            onMouseLeave={() => {
                set({ transform: "translateY(0px)" });
            }}
            style={{ ...style, transform: spring.transform }}
        >
            {image && (
                <GatsbyImage
                    alt={`card-image-${title}`}
                    className={`${styles.image}`}
                    image={{ ...image, aspectRatio: 1 }}
                />
            )}

            <div className={styles.content}>
                <h3 className={styles.heading}>{title}</h3>
                {subtitle && <SmallCaps>{subtitle}</SmallCaps>}
                <p className={styles.description}>{description}</p>
            </div>
            {linkHref && (
                <AnimatedLink className={styles.ctaLink} style={{ backgroundColor: color }}>
                    {linkText}
                </AnimatedLink>
            )}
        </a.a>
    );
};

export default LinkCard;
