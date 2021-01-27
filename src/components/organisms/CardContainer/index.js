import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { LinkCard, SectionWrapper } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import { colorArray } from "utilities/colorArray";
import styles from "./styles.module.scss";

const CardContainer = ({ subtitle, title, items, linkText, linkHref, backgroundColor }) => {
    const { ref, inView } = useInView({
        threshold: 0,
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
        <SectionWrapper
            subtitle={subtitle}
            title={title}
            linkText={linkText}
            linkHref={linkHref}
            className={`${backgroundColor && styles.expandBackground}`}
            trailArray={textTrail}
            ref={ref}
        >
            <div className={`row ${styles.cardRow}`}>
                {items.map((item, i) => (
                    <a.div className={`col-lg-${12 / items.length} col-md-6`} key={item.title} style={cardTrail[i]}>
                        <LinkCard
                            color={colorArray[i]}
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image && item.image.childImageSharp.fluid}
                            description={item.description}
                            linkText={item.linkText}
                            linkHref={item.linkHref}
                        />
                    </a.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CardContainer;
