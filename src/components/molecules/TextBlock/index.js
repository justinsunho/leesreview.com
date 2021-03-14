import React from "react";
import { a, useTrail } from "react-spring";
import { Button, CTALink, SmallCaps } from "components/atoms";
import { enterAbove } from "utilities/springConfigs";
import { textBlock, paragraph } from "./styles.module.scss";

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
    darkMode,
    children,
}) => {
    const Heading = a(headingTag);
    const AnimatedSmallCaps = a(SmallCaps);
    const AnimatedButton = a(Button);
    const AnimatedCTALink = a(CTALink);

    const trail = useTrail(5, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 },
    });

    return (
        <a.div className={`${className} ${textBlock}`}>
            <AnimatedSmallCaps style={{ ...trail[0] }} altColor={darkMode}>
                {subtitle}
            </AnimatedSmallCaps>

            <Heading style={{ ...trail[1], color: darkMode ? "#FFF" : "" }}>{headingText}</Heading>
            <a.p className={paragraph} style={{ ...trail[2], color: darkMode ? "#FFF" : "" }}>
                {description}
            </a.p>
            {linkHref && linkText ? (
                button ? (
                    <AnimatedButton linkHref={linkHref} style={trail[3]}>
                        {linkText}
                    </AnimatedButton>
                ) : (
                    <AnimatedCTALink linkHref={linkHref} style={{ ...trail[3], color: darkMode ? "#FFF" : "" }}>
                        {linkText}
                    </AnimatedCTALink>
                )
            ) : (
                ""
            )}
            <a.div style={trail[4]}>{children}</a.div>
        </a.div>
    );
};

export default TextBlock;
