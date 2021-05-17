import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useTrail } from "react-spring";
import { enterRight } from "utilities/springConfigs";
import * as styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";

const MethodItem = ({ color, description, image, index, title }) => {
    const { inView, ref } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const textTrail = useTrail(2, {
        ...enterRight(inView),
        config: { mass: 5, tension: 2000, friction: 200 },
    });

    return (
        <div className={`${styles.methodItem}`} ref={ref} style={{ borderBottom: `1rem solid ${color}` }}>
            <GatsbyImage alt={`method-image-${title}`} className={`${styles.image}`} image={image} />
            <div className={`${styles.container}`}>
                <svg className={styles.number} height="72px" viewBox="0 0 24 24" width="72px">
                    <path
                        d="M21.511,9.864c0-5.401-4.504-9.751-9.961-9.499C6.643,0.592,2.676,4.601,2.496,9.51
		c-0.156,4.328,2.58,8.039,6.428,9.354c0.637,0.217,1.154,0.688,1.44,1.297l1.637,3.484l1.636-3.484
		c0.282-0.602,0.79-1.076,1.42-1.29C18.81,17.597,21.511,14.047,21.511,9.864z"
                        fill={color}
                    />
                    <circle cx="11.98" cy="9.814" fill="#FFFFFF" r="6.457" />
                    <text
                        fill={color}
                        fontFamily="'Avenir-Roman'"
                        fontSize="6.4194"
                        transform="matrix(1 0 0 1 10.2793 11.8984)"
                    >
                        {index}
                    </text>
                </svg>
                <a.h3 className={styles.title} style={textTrail[0]}>
                    {title}
                </a.h3>
                <a.p className={styles.description} style={textTrail[1]}>
                    {description}
                </a.p>
            </div>
        </div>
    );
};

export default MethodItem;
