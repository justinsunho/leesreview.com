import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterRight } from "utilities/springConfigs";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const AnimatedImg = a(Image);

    const imageSpring = useSpring({
        ...enterRight(inView),
    });

    return (
        <div className={`section`}>
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
        </div>
    );
};

export default MediaSection;
