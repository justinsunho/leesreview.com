import React, { useState, useRef, useEffect } from "react";
import { a, useSpring } from "react-spring";
import Img from "gatsby-image";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const TestimonyCard = ({ title, college, tags, body, image, className, color }) => {
    const node = useRef();
    const [clicked, setClick] = useState(0);

    const [maxHeightSpring, setMaxHeightSpring] = useSpring(() => ({
        maxHeight: "25rem",
    }));

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setClick(1);
            setMaxHeightSpring({ maxHeight: "100%" });
        } else {
            setClick(0);
            setMaxHeightSpring({ maxHeight: "25rem" });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    });

    return (
        <div className={`${className} ${styles.container} ${clicked && styles.clicked}`} ref={node}>
            <div className={`${styles.imageContainer}`}>
                <Img className={`${styles.image}`} fluid={image} />
                <h5 className={`${styles.college}`} style={{ backgroundColor: `${color}` }}>
                    {college}
                </h5>
            </div>

            <a.div className={`${styles.content}`} style={maxHeightSpring}>
                <div
                    onClick={() => {
                        setClick(0);
                        setMaxHeightSpring({
                            maxHeight: "25rem",
                        });
                    }}
                    role={`dialog`}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.closeButton}`}
                    >
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h4 className={`${styles.title}`}>{title}</h4>
                <div className={`${styles.tagContainer}`}>
                    {tags.map((tag) => (
                        <div className={`${styles.tag}`}>
                            <SmallCaps>{tag}</SmallCaps>
                        </div>
                    ))}
                </div>
                <p className={`${styles.quote}`}>{body}</p>
            </a.div>
        </div>
    );
};

export default TestimonyCard;
