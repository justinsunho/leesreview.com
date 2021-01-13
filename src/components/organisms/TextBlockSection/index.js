import React from "react";
import { useInView } from "react-intersection-observer";
import { TextBlock } from "components/molecules";
import utilities from "theme/utilities.module.scss";

const TextBlockSection = ({ title, textBlocks }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className={`section`} ref={ref}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {textBlocks.map((item, i) => (
                    <TextBlock
                        key={item.title}
                        className={`col-lg-${12 / textBlocks.length} col-md-${24 / textBlocks.length} ${
                            utilities.textCenter
                        } justify-content-stretch`}
                        headingText={item.title}
                        headingTag={"h3"}
                        description={item.description}
                        inView={inView}
                    />
                ))}
            </div>
        </div>
    );
};

export default TextBlockSection;
