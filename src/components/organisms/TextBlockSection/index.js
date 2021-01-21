import React from "react";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import { TextBlock } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const TextBlockSection = ({ title, items }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className={`section ${styles.textBlockSectionContainer}`} ref={ref}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-lg-${12 / items.length} col-md-${24 / items.length} ${styles.container}`}>
                        {item.image && (
                            <Img
                                className={styles.image}
                                style={{ position: "absolute" }}
                                fluid={item.image.childImageSharp.fluid}
                            />
                        )}
                        <TextBlock
                            key={item.title}
                            className={`${utilities.textCenter} justify-content-stretch  ${styles.textBlockContainer}`}
                            headingText={item.title}
                            headingTag={"h3"}
                            description={item.description}
                            inView={inView}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextBlockSection;
