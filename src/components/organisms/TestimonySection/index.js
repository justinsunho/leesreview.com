import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTransition, animated, useTrail } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import BigQuote from "./BigQuote";
import CarouselContainer from "./CarouselContainer";
import TestimonyItem from "./TestimonyItem";
import styles from "./styles.module.scss";

const TestimonySection = ({ subtitle, linkText, linkHref, testimonyList }) => {
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

    const elems = transitions((style, item, key) => {
        return (
            <animated.div style={{ ...style }} key={key}>
                <BigQuote quote={item.node.rawMarkdownBody} />
            </animated.div>
        );
    });

    const elems2 = transitions((style, item, key) => {
        const { title, tags, college, image } = item.node.frontmatter;

        return (
            <animated.div style={{ ...style }} key={key}>
                <TestimonyItem image={image} tags={tags} title={title} college={college} inView={inView} />
            </animated.div>
        );
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
            <Curve />
            <div className={`section`}>
                <div className={`row align-items-start flex-column-reverse flex-md-row`}>
                    <div className={`col-md-6`}>
                        <AnimatedSmallCaps style={trail[0]}>{subtitle}</AnimatedSmallCaps>
                        {elems}
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
                            {elems2}
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
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M1211 205.999C938 -319.001 389 348 0.5 174.5V303.5H1211V205.999Z" fill="#56CCF2" />
            <path
                opacity="0.2"
                d="M1201.5 256.5C848.542 -385.66 326 415.997 5 181.5V301H1201.5V256.5Z"
                fill="url(#paint0_linear)"
            />
            <defs>
                <linearGradient id="paint0_linear" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2F80ED" stop-opacity="0" />
                    <stop offset="0.0001" stop-color="#2F80ED" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);
