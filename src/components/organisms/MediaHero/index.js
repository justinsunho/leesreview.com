import React from "react";
import { useInView } from "react-intersection-observer";
import { Ribbon } from "components/atoms";
import { TextBlock, Info } from "components/molecules";
import * as styles from "./styles.module.scss";

const MediaHero = ({ children, description, headingText, ribbon, subtitle }) => {
    const { inView, ref } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className={`section ${styles.heroContainer}`} ref={ref}>
            {ribbon && <Ribbon alt={headingText} className={styles.ribbon} inView={inView} />}
            <div className={` row align-items-start`}>
                <TextBlock
                    className={`col-md-6 ${styles.textBlock}`}
                    darkMode={ribbon && true}
                    description={description}
                    headingTag={"h1"}
                    headingText={headingText}
                    inView={inView}
                    subtitle={subtitle}
                >
                    <Info smallCapsClass={styles.info} />
                </TextBlock>
                <div className={`col-md-6 ${styles.rightSection}`}>{children}</div>
            </div>
        </div>
    );
};

export default MediaHero;
