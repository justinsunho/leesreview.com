import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useTrail } from "react-spring";
import { SmallCaps } from "components/atoms";
import * as styles from "./styles.module.scss";
import { enterAbove } from "utilities/springConfigs";

const TestimonyItem = ({ college, image, inView, tags, title }) => {
    const AnimatedImg = a(GatsbyImage);

    const trail = useTrail(5, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 },
    });

    return (
        <div className={styles.testimonyItem}>
            <AnimatedImg
                alt={`testimony-item-image-${title}`}
                className={`${styles.image}`}
                image={{ ...image.childImageSharp.gatsbyImageData, aspectRatio: 1 }}
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
                <a.h4 style={trail[2]}>{title}</a.h4>

                <a.p style={trail[3]}>{college}</a.p>
            </div>
        </div>
    );
};

export default TestimonyItem;
