import React from "react";
import { Tile, SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";
import styles from "./styles.module.scss";

const TileContainer = ({ backgroundClassName, className, title, items }) => {
    return (
        <SectionWrapper
            title={title}
            className={` ${styles.tileBlockSection}`}
            backgroundClassName={`${backgroundClassName} ${className}`}
        >
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-lg col-md-6 ${styles.tileWrapper}`} key={i}>
                        <Tile
                            title={item.title}
                            image={item.image.childImageSharp.fluid}
                            description={item.description}
                            color={colorArray[i]}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TileContainer;
