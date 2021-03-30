import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useSpring } from "react-spring";
import { CTALink, SmallCaps } from "components/atoms";
import { card, imageStyle, content, heading, descriptionStyle, ctaLink } from "./styles.module.scss";

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
            className={`${card} ${className}`}
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
                    className={`${imageStyle}`}
                    image={{ ...image, aspectRatio: 1 }}
                />
            )}

            <div className={content}>
                <h3 className={heading}>{title}</h3>
                {subtitle && <SmallCaps>{subtitle}</SmallCaps>}
                <p className={descriptionStyle}>{description}</p>
            </div>
            {linkHref && (
                <AnimatedLink className={ctaLink} style={{ backgroundColor: color }}>
                    {linkText}
                </AnimatedLink>
            )}
        </a.a>
    );
};

export default LinkCard;
