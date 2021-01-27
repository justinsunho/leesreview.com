import React from "react";
import Img from "gatsby-image";
import { a, useTrail } from "react-spring";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";
import { enterAbove } from "utilities/springConfigs";

const TestimonyItem = ({ image, college, tags, title, inView }) => {
    const AnimatedImg = a(Img);

    const trail = useTrail(5, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 },
    });

    return (
        <div className={styles.testimonyItem}>
            <AnimatedImg
                className={`${styles.image}`}
                fluid={{ ...image.childImageSharp.fluid, aspectRatio: 1 }}
                style={{ position: "absolute", ...trail[0] }}
            />
            <div className={styles.content}>
                <a.div className={styles.tagContainer} style={trail[1]}>
                    {tags.map((tag) => (
                        <SmallCaps className={styles.tag} key={tag}>
                            {tag}
                        </SmallCaps>
                    ))}
                </a.div>
                <a.h4 className={styles.heading} style={trail[2]}>
                    {title}
                </a.h4>

                <a.p className={styles.description} style={trail[3]}>
                    {college}
                </a.p>
            </div>
        </div>
    );
};

export default TestimonyItem;
