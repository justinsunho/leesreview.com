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
            <div className={`${styles.hero} row align-items-center flex-md-row flex-column-reverse  ${className}`}>
                <TextBlock
                    className="col-md-6 col-lg-4 align-items-start"
                    headingTag={"h1"}
                    subtitle={"hero subtitle"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    button={button}
                    inView={inView}
                />
                <div className={"col-md-6 col-lg-8"}>
                    <AnimatedImage image={image} style={imageSpring} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
