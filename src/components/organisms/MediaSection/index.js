import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image, Ribbon } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterRight } from "utilities/springConfigs";
import { mediaSection, mediaSectionTextWrapper } from "./styles.module.scss";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref, ribbon }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const AnimatedImg = a(Image);

    const imageSpring = useSpring({
        ...enterRight(inView),
    });

    return (
        <div className={`section ${mediaSection}`}>
            {ribbon && <Ribbon inView={inView} image={image} />}
            <div className={`row align-items-center ${mediaSectionTextWrapper}`} ref={ref}>
                <div className={`col-md-6`}>
                    {/* <AnimatedImg image={image} style={imageSpring} color={"#3b7fa8"} /> */}
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
                        darkMode={ribbon && true}
                        primary
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
