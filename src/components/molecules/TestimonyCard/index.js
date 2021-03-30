import React, { useState, useRef, useEffect } from "react";
import { a, useSpring } from "react-spring";
import { GatsbyImage } from "gatsby-plugin-image";
import { SmallCaps } from "components/atoms";
import {
    container,
    imageContainer,
    imageStyle,
    collegeStyle,
    content,
    closeButton,
    titleStyle,
    tagContainer,
    tagStyle,
    quote,
    clickedStyle,
} from "./styles.module.scss";

const TestimonyCard = ({ title, college, tags, body, image, className, color, year }) => {
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
        <div className={`${className} ${container} ${clicked && clickedStyle}`} ref={node}>
            <div className={`${imageContainer}`}>
                <GatsbyImage alt={`testimony-card-image-${title}`} image={image} className={`${imageStyle}`} />
                <h5 className={`${collegeStyle}`} style={{ backgroundColor: `${color}` }}>
                    {college}
                </h5>
            </div>

            <a.div className={`${content}`} style={maxHeightSpring}>
                <div
                    onClick={() => {
                        setClick(0);
                        setMaxHeightSpring({
                            maxHeight: "25rem",
                        });
                    }}
                    onKeyDown={(e) => {
                        e.key === 13 && setClick(0);
                        setMaxHeightSpring({
                            maxHeight: "25rem",
                        });
                    }}
                    role={`button`}
                    tabIndex={0}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${closeButton}`}
                    >
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h4 className={`${titleStyle}`}>{title}</h4>
                <div className={`${tagContainer}`}>
                    {tags.map((tag) => (
                        <div className={`${tagStyle}`}>
                            <SmallCaps>{tag}</SmallCaps>
                        </div>
                    ))}
                </div>
                <p className={`${quote}`}>{body}</p>
                <div>{year}</div>
            </a.div>
        </div>
    );
};

export default TestimonyCard;
