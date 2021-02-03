import React from "react";
import { useSpring, a } from "react-spring";
import styles from "./styles.module.scss";

const ImageBackground = ({ className, color, children, backgroundStyle }) => {
    // const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    // const trans1 = (x, y) => `translate3d(${0 / 150}px, ${0 / 50}px,0)`;
    // const trans2 = (x, y) => `translate3d(${x / 50 + 2}px, ${-y / 25 + 2}px,0)`;

    // const [props, set] = useSpring(() => ({ xy: [0, 0] }));

    return (
        // <div
        //     className={`${styles.container} ${className}`}
        //     onMouseMove={({ clientX: x, clientY: y }) => {
        //         set({ xy: calc(x, y) });
        //     }}
        //     onMouseOut={() => {
        //         set({ xy: [0, 0] });
        //     }}
        //     onBlur={() => {
        //         set({ xy: [0, 0] });
        //     }}
        //     role={`region`}
        // >
        //     <a.div
        //         className={styles.background}
        //         style={{ transform: props.xy.interpolate(trans2), backgroundColor: color ? color : "#eb5757" }}
        //     />
        //     <a.div className={styles.child} style={{ transform: props.xy.interpolate(trans1), ...backgroundStyle }}>
        //         {children}
        //     </a.div>
        // </div>

        <div className={`${styles.container} ${className}`}>
            <div className={styles.background} style={{ backgroundColor: color ? color : "#eb5757" }} />
            <div className={styles.child} style={{ ...backgroundStyle }}>
                {children}
            </div>
        </div>
    );
};

export default ImageBackground;
