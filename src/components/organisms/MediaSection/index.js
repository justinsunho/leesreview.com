import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterRight } from "utilities/springConfigs";
import styles from "./styles.module.scss";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref, ribbon }) => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const AnimatedImg = a(Image);

    const imageSpring = useSpring({
        ...enterRight(inView),
    });

    const ribbonSpring = useSpring({
        from: {
            width: "0%",
            padding: "0rem 0rem",
        },
        to: {
            width: inView ? "100%" : "0%",
            padding: inView ? "0rem 100rem" : "0rem 0rem",
        },
    });

    return (
        <div className={`section ${styles.mediaSection}`}>
            {ribbon && (
                <a.div className={styles.ribbonContainer}>
                    <a.div className={styles.ribbon} style={ribbonSpring} />
                </a.div>
            )}
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
                        darkMode={ribbon && true}
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
