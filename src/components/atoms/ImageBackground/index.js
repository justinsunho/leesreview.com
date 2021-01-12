import React from "react";
import { useSpring, a } from "react-spring";
import styles from "./styles.module.scss";

const ImageBackground = ({ className, color, children }) => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
    const trans2 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;

    const [props, set] = useSpring(() => ({ xy: [0, 0] }));

    return (
        <div
            className={`${styles.container} ${className}`}
            onMouseMove={({ clientX: x, clientY: y }) => {
                set({ xy: calc(x, y) });
            }}
        >
            <a.div className={styles.child} style={{ transform: props.xy.interpolate(trans1) }}>
                {children}
            </a.div>
            <a.div
                className={styles.background}
                style={{ transform: props.xy.interpolate(trans2), backgroundColor: color }}
            />
        </div>
    );
};

export default ImageBackground;
