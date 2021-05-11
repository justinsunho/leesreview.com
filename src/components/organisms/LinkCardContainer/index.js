import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { LinkCard, SectionWrapper } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import { colorArray } from "utilities/colorArray";
import * as styles from "./styles.module.scss";

const LinkCardContainer = ({ backgroundClassName, items, linkHref, linkText, subtitle, title }) => {
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
        <SectionWrapper
            className={`${backgroundClassName}`}
            linkHref={linkHref}
            linkText={linkText}
            ref={ref}
            subtitle={subtitle}
            title={title}
            trailArray={textTrail}
        >
            <div className={`row ${styles.cardRow}`}>
                {items.map((item, i) => (
                    <a.div
                        className={`col-lg-4 col-md-6 ${styles.cardContainer}`}
                        key={item.title}
                        style={cardTrail[i]}
                    >
                        <LinkCard
                            color={colorArray[i]}
                            description={item.description}
                            image={item.image && item.image.childImageSharp.gatsbyImageData}
                            linkHref={item.linkHref}
                            linkText={item.linkText}
                            subtitle={item.subtitle}
                            title={item.title}
                        />
                    </a.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default LinkCardContainer;
