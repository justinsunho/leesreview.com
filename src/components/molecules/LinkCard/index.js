import React from "react";
import Img from "gatsby-image";
import { a, useSpring } from "react-spring";
import { CTALink, SmallCaps } from "components/atoms";
import { card, imageStyle, content, heading, descriptionStyle, ctaLink } from "./styles.module.scss";

const LinkCard = ({ title, className, image, subtitle, description, linkText, linkHref, style, color }) => {
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
            href={linkHref}
            className={`${card} ${className}`}
            style={{ ...style, transform: spring.transform }}
            onMouseEnter={() => {
                set({ transform: "translateY(-8px)" });
            }}
            onMouseLeave={() => {
                set({ transform: "translateY(0px)" });
            }}
        >
            {image && <Img className={`${imageStyle}`} fluid={{ ...image, aspectRatio: 1 }} />}

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
