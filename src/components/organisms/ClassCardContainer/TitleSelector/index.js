import React from "react";
import { a, useSpring } from "react-spring";
import { titleStyle } from "./styles.module.scss";

const TitleSelector = ({ title, className, onClick, color, index, currentTag }) => {
    const spring = useSpring({
        backgroundColor: currentTag === index ? `${color}` : `rgba(255, 255, 255, 0)`,
        color: currentTag === index ? `#FFF` : `#333`,
    });

    return (
        <a.div
            onClick={() => {
                onClick(index);
            }}
            onKeyDown={(e) => e.key === 13 && onClick(index)}
            className={`${className} ${titleStyle}`}
            style={spring}
            tabIndex={0}
            role={"button"}
        >
            <a.h5>{title}</a.h5>
        </a.div>
    );
};

export default TitleSelector;
