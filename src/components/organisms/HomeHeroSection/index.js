import React from "react";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import { a, useSpring, useSprings, interpolate } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterLeft } from "utilities/springConfigs";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const HomeHeroSection = ({ headingText, description, linkText, linkHref, button, image, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const AnimatedImage = a(Img);

    const imageSpring = useSpring({
        ...enterLeft(inView),
    });

    const blah = [0, 1, 2, 3];

    const springs = useSprings(
        blah.length,
        blah.map((item, i) => ({
            from: {
                top: 0,
                left: `${-2000 + i * 30}px`,
                width: `${4 * i}rem`,
                height: `${4 * i}rem`,
            },
            to: {
                left: `${window.innerWidth + 2000}px`,
                top: 1,
            },
            config: {
                duration: `${i * 10000}`,
            },
            loop: true,
        }))
    );

    return (
        <div className={`section ${styles.homeHeroWrapper}`} ref={ref}>
            <div className={`${styles.hero} row justify-content-center ${className}`}>
                {/* {springs.map((props) => (
                    <AnimatedImage
                        className={`${styles.image}`}
                        fluid={image}
                        style={{
                            position: "absolute",
                            top: props.top
                                .interpolate({
                                    range: [0, 0.75, 1],
                                    output: [200, 100, 200],
                                })
                                .interpolate((top) => `${top}px`),
                            left: props.left,
                            width: props.width,
                            height: props.height,
                        }}
                    />
                ))} */}

                <TextBlock
                    className={`col-md-7 align-items-center justify-content-center ${utilities.textCenter}`}
                    headingTag={"h1"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    button={button}
                    inView={inView}
                />
            </div>
        </div>
    );
};

export default HomeHeroSection;
