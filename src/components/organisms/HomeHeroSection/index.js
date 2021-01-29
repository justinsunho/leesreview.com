import React from "react";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterLeft } from "utilities/springConfigs";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const HomeHeroSection = ({ headingText, description, linkText, linkHref, button, image, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const AnimatedImage = a(Image);

    const imageSpring = useSpring({
        ...enterLeft(inView),
    });

    return (
        <div className={`section ${styles.homeHeroWrapper}`} ref={ref}>
            <div className={`${styles.hero} row justify-content-center ${className}`}>
                <Img className={`${styles.image}`} fluid={image} style={{ position: "absolute" }} />
                <TextBlock
                    className={`col-md-7 align-items-center justify-content-center ${utilities.textCenter}`}
                    headingTag={"h1"}
                    subtitle={"hero subtitle"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    button={button}
                    inView={inView}
                    darkMode
                />

                {/* <AnimatedImage className={} image={image} style={imageSpring} /> */}
            </div>
        </div>
    );
};

export default HomeHeroSection;
