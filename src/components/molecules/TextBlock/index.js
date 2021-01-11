import React from "react";
import { a, useTrail } from "react-spring";
import { Button, CTALink, SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const TextBlock = ({
    subtitle,
    headingTag,
    headingText,
    description,
    linkText,
    linkHref,
    button,
    className,
    inView,
}) => {
    const Heading = a(headingTag);
    const AnimatedSmallCaps = a(SmallCaps);
    const AnimatedButton = a(Button);
    const AnimatedCTALink = a(CTALink);

    const trail = useTrail(4, {
        to: inView ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(-20px)" },
        from: { opacity: 0, transform: "translateY(-20px)" },
        config: { mass: 15, tension: 2000, friction: 200 },
    });

    return (
        <a.div className={`${className} ${styles.textBlock}`}>
            <AnimatedSmallCaps style={trail[0]}>{subtitle}</AnimatedSmallCaps>
            <Heading className={styles.heading} style={trail[1]}>
                {headingText}
            </Heading>
            <a.p className={styles.paragraph} style={trail[2]}>
                {description}
            </a.p>
            {linkHref && linkText && button ? (
                <AnimatedButton to={linkHref} style={trail[3]}>
                    {linkText}
                </AnimatedButton>
            ) : (
                <AnimatedCTALink linkHref={linkHref} style={trail[3]}>
                    {linkText}
                </AnimatedCTALink>
            )}
        </a.div>
    );
};

export default TextBlock;
