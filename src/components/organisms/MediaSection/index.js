import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import Img from "gatsby-image";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref }) => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const AnimatedImg = a(Image);

    const imageSpring = useSpring({
        to: inView ? { opacity: 1, transform: "translateX(0)" } : { opacity: 0, transform: "translateX(-50px)" },
        from: { opacity: 0, transform: "translateX(-50px)" },
    });

    return (
        <div className={`row align-items-center`} ref={ref}>
            <div className={`col-md-6`}>
                <AnimatedImg image={image} style={imageSpring} />
            </div>
            <div className={`col-md-6`}>
                <TextBlock
                    subtitle={subtitle}
                    headingTag={"h2"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    inView={inView}
                />
            </div>
        </div>
    );
};

export default MediaSection;
