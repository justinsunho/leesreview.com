import React from "react";
import { useInView } from "react-intersection-observer";
import { TextBlock } from "components/molecules";
import { homeHeroWrapper } from "./styles.module.scss";

const HomeHeroSection = ({ headingText, description, linkText, linkHref, button, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={`section ${homeHeroWrapper}`} ref={ref}>
            <div className={` row justify-content-center ${className}`}>
                <TextBlock
                    className={`col-md-7 align-items-center justify-content-center text-center`}
                    headingTag={"h1"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                    button={button}
                    inView={inView}
                />
            </div>
        </div>
    );
};

export default HomeHeroSection;
