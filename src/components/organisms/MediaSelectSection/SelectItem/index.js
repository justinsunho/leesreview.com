import React from "react";
import { a, useSpring } from "react-spring";
import { selectItemWrapper, selectItem } from "./styles.module.scss";

const SelectItem = ({ children, onClick, className, color, current }) => {
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
        <a.div className={`${selectItemWrapper}`} style={{ background: clickSpring.background }} onClick={onClick}>
            <a.h4 className={`${selectItem} ${className}`} style={{ paddingLeft: clickSpring.paddingLeft }}>
                {children}
            </a.h4>
        </a.div>
    );
};

export default SelectItem;
