import React, { useState } from "react";
import { useTransition, a } from "react-spring";
import { Image } from "components/atoms";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";
import SelectItem from "./SelectItem";
import styles from "./styles.module.scss";

const MediaSelectSection = ({ title, items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const transitions = useTransition(items[currentIndex], (items) => items.title, {
        from: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
        enter: { opacity: 1, transform: "translateX(0)", visibility: "visible", height: "auto" },
        leave: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
    });

    return (
        <SectionWrapper title={title}>
            <div className={`row`}>
                <div className={`col-lg-7`}>
                    {transitions.map(({ item, key, props }) => {
                        return (
                            <a.div className={styles.mediaContainer} style={props} key={key}>
                                <Image
                                    class={styles.image}
                                    color={colorArray[currentIndex]}
                                    image={item.image.childImageSharp.fluid}
                                />
                                <div className={styles.content}>
                                    <h4 className={styles.title}>{item.title}</h4>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </a.div>
                        );
                    })}
                </div>
                <div className={`col-lg-5`}>
                    {items.map((item, i) => (
                        <SelectItem
                            onClick={() => {
                                setCurrentIndex(i);
                            }}
                            current={currentIndex === i}
                            color={colorArray[i]}
                            key={item.title}
                        >
                            {item.title}
                        </SelectItem>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MediaSelectSection;
