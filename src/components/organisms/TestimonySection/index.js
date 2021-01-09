import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import { CarouselContainer, BigQuote, TestimonyItem } from "components/molecules";

const TestimonySection = ({ subtitle, linkText, linkHref, testimonyList }) => {
    const [testimonyIndex, setTestimonyIndex] = useState(0);

    const transitions = useTransition(testimonyList[testimonyIndex], (testimonyList) => testimonyList.title, {
        from: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
        enter: { opacity: 1, transform: "translateX(0)", visibility: "visible", height: "auto" },
        leave: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
    });

    return (
        <div className={`row align-items-center`}>
            <div className={`col-md-6`}>
                <SmallCaps>{subtitle}</SmallCaps>
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={{ ...props }}>
                        <BigQuote quote={item.quote} />
                    </animated.div>
                ))}
                <CTALink linkHref={linkHref}>{linkText}</CTALink>
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
                                />
                            </animated.div>
                        );
                    })}
                </CarouselContainer>
            </div>
        </div>
    );
};

export default TestimonySection;
