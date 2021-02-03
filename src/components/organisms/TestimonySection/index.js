import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTransition, animated, useTrail } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import BigQuote from "./BigQuote";
import CarouselContainer from "./CarouselContainer";
import TestimonyItem from "./TestimonyItem";
import styles from "./styles.module.scss";

const TestimonySection = ({ subtitle, linkText, linkHref, testimonyList, curve }) => {
    const [testimonyIndex, setTestimonyIndex] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const transitions = useTransition(testimonyList[testimonyIndex], {
        key: (testimonyList) => testimonyList.node.id,
        from: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
        enter: { opacity: 1, transform: "translateX(0)", visibility: "visible", height: "auto" },
        leave: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
    });

    const trail = useTrail(2, {
        to: inView ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(-10px)" },
        from: { opacity: 0, transform: "translateY(-10px)" },
        config: { mass: 15, tension: 2000, friction: 200 },
    });

    const AnimatedCTALink = animated(CTALink);
    const AnimatedSmallCaps = animated(SmallCaps);

    return (
        <div className={` ${styles.container}`} ref={ref}>
            {curve && <Curve />}
            <div className={`section`}>
                <div className={`row align-items-start flex-column-reverse flex-md-row`}>
                    <div className={`col-md-6`}>
                        <AnimatedSmallCaps style={trail[0]}>{subtitle}</AnimatedSmallCaps>
                        {transitions.map(({ item, key, props }) => (
                            <animated.div style={{ ...props }} key={key}>
                                <BigQuote quote={item.node.rawMarkdownBody} />
                            </animated.div>
                        ))}
                        <AnimatedCTALink linkHref={linkHref} style={trail[1]}>
                            {linkText}
                        </AnimatedCTALink>
                    </div>
                    <div className={`col-md-6`}>
                        <CarouselContainer
                            testimonyList={testimonyList}
                            itemCount={testimonyList.length}
                            currentIndex={testimonyIndex}
                            setIndex={setTestimonyIndex}
                        >
                            {transitions.map(({ item, key, props }) => {
                                const { title, tags, college, image } = item.node.frontmatter;
                                return (
                                    <animated.div style={{ ...props }} key={key}>
                                        <TestimonyItem
                                            image={image}
                                            tags={tags}
                                            title={title}
                                            college={college}
                                            inView={inView}
                                        />
                                    </animated.div>
                                );
                            })}
                        </CarouselContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonySection;

const Curve = () => (
    <div className={styles.curve}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270">
            <path opacity="0.1" d="M1211 205.999C938 -319.001 389 348 0.5 174.5V303.5H1211V205.999Z" fill="#56CCF2" />
        </svg>
    </div>
);
