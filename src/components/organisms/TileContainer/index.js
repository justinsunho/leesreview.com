import React from "react";
import { Tile, SectionWrapper } from "components/molecules";
import styles from "./styles.module.scss";

const TileContainer = ({ title, items }) => {
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

export default TileContainer;
