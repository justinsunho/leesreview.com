import React, { useState } from "react";
import { a, useSpring } from "react-spring";
import styles from "./styles.module.scss";

const TitleSelector = ({ title, className, onClick, color, index, currentTag }) => {
    const spring = useSpring({
        borderBottom: currentTag === index ? `3px solid ${color}` : `3px solid #eaeaea`,
    });

    return (
        <a.div
            onClick={() => {
                onClick(index);
            }}
            className={`${className} ${styles.title}`}
            style={spring}
        >
            <a.h4>{title}</a.h4>
        </a.div>
    );
};

export default TitleSelector;
