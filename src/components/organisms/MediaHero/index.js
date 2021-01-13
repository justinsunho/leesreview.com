import React from "react";
import { useInView } from "react-intersection-observer";
import { Ribbon } from "components/atoms";
import { TextBlock, Info } from "components/molecules";
import styles from "./styles.module.scss";

const MediaHero = ({ headingText, description, subtitle, ribbon, children }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className={`section ${styles.heroContainer}`} ref={ref}>
            {ribbon && <Ribbon inView={inView} />}
            <div className={` row align-items-start`}>
                <TextBlock
                    className={`col-md-6 ${styles.textBlock}`}
                    headingTag={"h1"}
                    headingText={headingText}
                    description={description}
                    inView={inView}
                    darkMode={ribbon && true}
                >
                    <Info smallCapsClass={styles.info} />
                </TextBlock>
                <div className={`col-md-6 ${styles.form}`}>{children}</div>
            </div>
        </div>
    );
};

export default MediaHero;
