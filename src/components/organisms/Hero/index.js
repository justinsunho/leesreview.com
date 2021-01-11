import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import styles from "./styles.module.scss";

const Hero = ({ headingText, description, linkText, linkHref, button, image, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const AnimatedImage = a(Image);

    const imageSpring = useSpring({
        to: inView ? { opacity: 1, transform: "translateX(0)" } : { opacity: 0, transform: "translateX(50px)" },
        from: { opacity: 0, transform: "translateX(50px)" },
    });

    return (
        <div className={`${styles.hero} row align-items-center ${className}`} ref={ref}>
            <TextBlock
                className="col-md-6"
                headingTag={"h1"}
                headingText={headingText}
                description={description}
                linkText={linkText}
                linkHref={linkHref}
                button={button}
                inView={inView}
            />
            <div className={"col-md-6"}>
                <AnimatedImage image={image} style={imageSpring} />
            </div>
        </div>
    );
};

export default Hero;
