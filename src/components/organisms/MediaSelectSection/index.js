import React, { useState } from "react";
import { useTransition, a, useTrail } from "react-spring";
import Img from "gatsby-image";
import { SelectItem } from "components/atoms";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const MediaSelectSection = ({ title, items }) => {
    const [index, setIndex] = useState(0);

    const transitions = useTransition(items[index], (items) => items.title, {
        from: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
        enter: { opacity: 1, transform: "translateX(0)", visibility: "visible", height: "auto" },
        leave: { opacity: 0, transform: "translateX(-10px)", visibility: "hidden", height: 0 },
    });

    const AnimatedImg = a(Img);

    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>
                    {title}
                    {index}
                </h2>
            </div>
            <div className={`row`}>
                <div className={`col-md-6`}>
                    {transitions.map(({ item, props, key }) => (
                        <AnimatedImg fluid={item.image.childImageSharp.fluid} style={props} key={key} />
                    ))}
                </div>
                <div className={`col-md-6`}>
                    {items.map((item, i) => (
                        <SelectItem onClick={() => setIndex(i)}>{item.title}</SelectItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaSelectSection;
