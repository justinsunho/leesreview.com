import React from "react";
import { a, useSpring } from "react-spring";
import * as styles from "./styles.module.scss";

const SelectItem = ({ children, className, color, current, onClick }) => {
    const clickSpring = useSpring({
        to: {
            background: current
                ? `linear-gradient(to right, ${color} 16px, #FFF 0px)`
                : `linear-gradient(to right, ${color} 0px, #FFF 0px)`,
            paddingLeft: current ? "1.5rem" : "1rem",
        },
        from: {
            background: `linear-gradient(to right, ${color} 0px, #FFF 0px)`,
            paddingLeft: "1rem",
        },
    });

    return (
        <a.div
            className={`${styles.selectItemWrapper}`}
            onClick={onClick}
            style={{ background: clickSpring.background }}
        >
            <a.h4 className={`${styles.selectItem} ${className}`} style={{ paddingLeft: clickSpring.paddingLeft }}>
                {children}
            </a.h4>
        </a.div>
    );
};

export default SelectItem;
