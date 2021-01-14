import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterLeft } from "utilities/springConfigs";
import styles from "./styles.module.scss";

const Hero = ({ headingText, description, linkText, linkHref, button, image, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const AnimatedImage = a(Image);

    const imageSpring = useSpring({
        ...enterLeft(inView),
    });

    return (
        <div className={`section`} ref={ref}>
            <div className={`${styles.hero} row align-items-center ${className}`}>
                <TextBlock
                    className="col-md-4 align-items-start"
                    headingTag={"h1"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    button={button}
                    inView={inView}
                />
                <div className={"col-md-8"}>
                    <AnimatedImage image={image} style={imageSpring} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
