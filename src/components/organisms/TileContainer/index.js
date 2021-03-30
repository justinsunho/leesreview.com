import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { Tile, SectionWrapper } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import { colorArray } from "utilities/colorArray";
import { tileBlockSection, tileWrapper, tileContainer } from "./styles.module.scss";

const TileContainer = ({ backgroundClassName, className, title, items }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const textRef = useRef();
    const textTrail = useTrail(2, {
        ...enterAbove(inView),
        config: { mass: 5, tension: 2000, friction: 200 },
        ref: textRef,
    });

    const tileRef = useRef();
    const tileTrail = useTrail(items.length, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 },
        ref: tileRef,
    });

    useChain(inView ? [textRef, tileRef] : []);

    return (
        <SectionWrapper
            title={title}
            className={` ${tileBlockSection}`}
            backgroundClassName={`${backgroundClassName} ${className}`}
            trailArray={textTrail}
            ref={ref}
        >
            <div className={`row ${tileContainer}`}>
                {items.map((item, i) => (
                    <a.div className={`col-lg col-md-6 ${tileWrapper}`} key={i} style={tileTrail[i]}>
                        <Tile
                            title={item.title}
                            icon={item.icon && item.icon.code}
                            description={item.description}
                            color={colorArray[i]}
                            videoId={item.videoId && item.videoId}
                        />
                    </a.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TileContainer;
