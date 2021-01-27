import React from "react";
import { useInView } from "react-intersection-observer";
import { Tile, SectionWrapper } from "components/molecules";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const TileBlockSection = ({ title, items }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <SectionWrapper title={title} className={`${styles.tileBlockSection}`}>
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-lg col-md-6 ${styles.tileWrapper}`} key={i}>
                        <Tile
                            title={item.title}
                            image={item.image.childImageSharp.fluid}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TileBlockSection;
