import React, { useState } from "react";
import { useTransition, a, useSprings, useSpring } from "react-spring";
import Img from "gatsby-image";
import { SelectItem, ImageBackground, Image } from "components/atoms";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const MediaSelectSection = ({ title, items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    const transitions = useTransition(items[currentIndex], (items) => items.title, {
        from: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
        enter: { opacity: 1, transform: "translateX(0)", visibility: "visible", height: "auto" },
        leave: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
    });

    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                <div className={`col-lg-7`}>
                    {transitions.map(({ item, props, key }, i) => (
                        <a.div className={styles.mediaContainer} style={props} key={key}>
                            <Image color={color[currentIndex]} image={item.image.childImageSharp.fluid} />
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </a.div>
                    ))}
                </div>
                <div className={`col-lg-5`}>
                    {items.map((item, i) => (
                        <SelectItem
                            onClick={() => {
                                setCurrentIndex(i);
                            }}
                            current={currentIndex === i}
                            color={color[i]}
                            key={item.title}
                        >
                            {item.title}
                        </SelectItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaSelectSection;
