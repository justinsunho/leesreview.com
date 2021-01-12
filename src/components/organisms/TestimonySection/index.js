import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTransition, animated, useTrail } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import { CarouselContainer, BigQuote, TestimonyItem } from "components/molecules";

const TestimonySection = ({ subtitle, linkText, linkHref, testimonyList }) => {
    const [testimonyIndex, setTestimonyIndex] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const transitions = useTransition(testimonyList[testimonyIndex], (testimonyList) => testimonyList.title, {
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
        <div className={`section`} ref={ref}>
            <div className={`row align-items-center flex-column-reverse flex-md-row`}>
                <div className={`col-md-6`}>
                    <AnimatedSmallCaps style={trail[0]}>{subtitle}</AnimatedSmallCaps>
                    {transitions.map(({ item, props, key }) => (
                        <animated.div key={key} style={{ ...props }}>
                            <BigQuote quote={item.quote} />
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
                        {transitions.map(({ item, props, key }) => {
                            const { title, tags, description, icon, image } = item;

                            return (
                                <animated.div style={{ ...props }} key={key}>
                                    <TestimonyItem
                                        image={image}
                                        tags={tags}
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        inView={inView}
                                    />
                                </animated.div>
                            );
                        })}
                    </CarouselContainer>
                </div>
            </div>
        </div>
    );
};

export default TestimonySection;
