import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { SectionWrapper, ClassCard } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import styles from "./styles.module.scss";

const PriceCardContainer = ({ backgroundClassName, items, title }) => {
    const { ref, inView } = useInView({
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
        <SectionWrapper title={title} backgroundClassName={backgroundClassName} trailArray={textTrail} ref={ref}>
            <div className={`row`}>
                {items.map((item, i) => (
                    <a.div className={`col-md pb-5`} style={cardTrail[i]} key={item.title}>
                        <ClassCard title={item.title} date={``} description={item.description} price={item.price} />
                    </a.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PriceCardContainer;
