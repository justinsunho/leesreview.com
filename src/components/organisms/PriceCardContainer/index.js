import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { SectionWrapper, ClassCard } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";

const PriceCardContainer = ({ backgroundClassName, items, title }) => {
    const { inView, ref } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const textRef = useRef();
    const textTrail = useTrail(2, {
        ...enterAbove(inView),
        config: { mass: 5, tension: 2000, friction: 200 },
        ref: textRef,
    });

    const cardRef = useRef();
    const cardTrail = useTrail(items.length, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 },
        ref: cardRef,
    });

    useChain(inView ? [textRef, cardRef] : []);

    return (
        <SectionWrapper backgroundClassName={backgroundClassName} ref={ref} title={title} trailArray={textTrail}>
            <div className={`row`}>
                {items.map((item, i) => (
                    <a.div className={`col-md pb-5`} key={item.title} style={cardTrail[i]}>
                        <ClassCard date={``} description={item.description} title={item.title} />
                    </a.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PriceCardContainer;
