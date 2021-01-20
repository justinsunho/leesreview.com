import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import { Card } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const CardContainer = ({ subtitle, title, items, linkText, linkHref }) => {
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

    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    useChain(inView ? [textRef, cardRef] : []);

    return (
        <div className={`section`} ref={ref}>
            {subtitle && (
                <a.div className={`row`} style={textTrail[0]}>
                    <div className={`col ${utilities.textCenter}`}>
                        <SmallCaps>{subtitle}</SmallCaps>
                    </div>
                </a.div>
            )}
            <a.div className={`row`} style={textTrail[1]}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </a.div>
            <div className={`row ${styles.cardRow}`}>
                {items.map((item, i) => (
                    <a.div
                        className={`col-lg-${12 / items.length} col-md-${24 / items.length}`}
                        key={item.title}
                        style={cardTrail[i]}
                    >
                        <Card
                            color={color[i]}
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
            {linkText && (
                <div className={`row ${styles.ctaRow}`}>
                    <CTALink linkHref={linkHref} className={`${utilities.textCenter} col`}>
                        {linkText}
                    </CTALink>
                </div>
            )}
        </div>
    );
};

export default CardContainer;
