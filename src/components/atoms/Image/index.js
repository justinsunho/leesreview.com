import React from "react";
import Img from "gatsby-image";
import { useSpring, a } from "react-spring";
import styles from "./styles.module.scss";

const Image = ({ image, className, style }) => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`;
    const trans2 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;

    const [props, set] = useSpring(() => ({ xy: [0, 0] }));

    const AnimatedImg = a(Img);

    return (
        <div
            className={style.container}
            style={style}
            onMouseMove={({ clientX: x, clientY: y }) => {
                set({ xy: calc(x, y) });
            }}
        >
            <AnimatedImg
                alt="test"
                className={`${className} ${styles.image}`}
                fluid={image}
                style={{ transform: props.xy.interpolate(trans1) }}
            />
            <a.div className={`${styles.background}`} style={{ transform: props.xy.interpolate(trans2) }} />
        </div>
    );
};

export default Image;
