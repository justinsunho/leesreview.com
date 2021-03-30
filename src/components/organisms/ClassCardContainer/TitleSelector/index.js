import React from "react";
import { a, useSpring } from "react-spring";
import { titleStyle } from "./styles.module.scss";

const TitleSelector = ({ className, color, currentTag, index, onClick, title }) => {
    const spring = useSpring({
        backgroundColor: currentTag === index ? `${color}` : `rgba(255, 255, 255, 0)`,
        color: currentTag === index ? `#FFF` : `#333`,
    });

    return (
        <a.div
            className={`${className} ${titleStyle}`}
            onClick={() => {
                onClick(index);
            }}
            onKeyDown={(e) => e.key === "Enter" && onClick(index)}
            role={"button"}
            style={spring}
            tabIndex={0}
        >
            <a.h5>{title}</a.h5>
        </a.div>
    );
};

export default TitleSelector;
