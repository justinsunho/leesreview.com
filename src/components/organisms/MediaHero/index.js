import React from "react";
import { useInView } from "react-intersection-observer";
import { Ribbon } from "components/atoms";
import { TextBlock, Info } from "components/molecules";
import { heroContainer, ribbonStyle, textBlock, info, rightSection } from "./styles.module.scss";

const MediaHero = ({ headingText, description, subtitle, ribbon, children }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className={`section ${heroContainer}`} ref={ref}>
            {ribbon && <Ribbon inView={inView} className={ribbonStyle} />}
            <div className={` row align-items-start`}>
                <TextBlock
                    className={`col-md-6 ${textBlock}`}
                    subtitle={subtitle}
                    headingTag={"h1"}
                    headingText={headingText}
                    description={description}
                    inView={inView}
                    darkMode={ribbon && true}
                >
                    <Info smallCapsClass={info} />
                </TextBlock>
                <div className={`col-md-6 ${rightSection}`}>{children}</div>
            </div>
        </div>
    );
};

export default MediaHero;
