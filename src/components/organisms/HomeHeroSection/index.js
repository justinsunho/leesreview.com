import React from "react";
import { useInView } from "react-intersection-observer";
import { TextBlock } from "components/molecules";
import * as styles from "./styles.module.scss";

const HomeHeroSection = ({ button, className, description, headingText, linkHref, linkText }) => {
    const { inView, ref } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={`section ${styles.homeHeroWrapper}`} ref={ref}>
            <div className={` row justify-content-center ${className}`}>
                <TextBlock
                    button={button}
                    className={`col-md-7 align-items-center justify-content-center text-center`}
                    description={description}
                    headingTag={"h1"}
                    headingText={headingText}
                    inView={inView}
                    linkHref={linkHref}
                    linkText={linkText}
                />
            </div>
        </div>
    );
};

export default HomeHeroSection;
