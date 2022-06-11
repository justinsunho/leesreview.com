import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { a, useTrail, useChain } from "react-spring";
import { Tile, SectionWrapper } from "components/molecules";
import { enterAbove } from "utilities/springConfigs";
import { colorArray } from "utilities/colorArray";
import * as styles from "./styles.module.scss";

const TileContainer = ({ backgroundClassName, className, items, title }) => {
  const { inView, ref } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const textRef = useRef();
  const textTrail = useTrail(2, {
    ...enterAbove(inView),
    config: { mass: 5, tension: 2000, friction: 200 },
    ref: textRef
  });

  const tileRef = useRef();
  const tileTrail = useTrail(items.length, {
    ...enterAbove(inView),
    config: { mass: 15, tension: 2000, friction: 200 },
    ref: tileRef
  });

  useChain(inView ? [textRef, tileRef] : []);

  return (
    <SectionWrapper
      backgroundClassName={`${backgroundClassName} ${className}`}
      className={` ${styles.tileBlockSection}`}
      ref={ref}
      title={title}
      trailArray={textTrail}
    >
      <div className={`row ${styles.tileContainer}`}>
        {items.map((item, i) => (
          <a.div
            className={`col-lg col-md-6 ${styles.tileWrapper}`}
            key={i}
            style={tileTrail[i]}
          >
            <Tile
              color={colorArray[i]}
              description={item.description}
              icon={item.icon && item.icon.code}
              map={item.map && item.map.code}
              title={item.title}
              videoId={item.videoId && item.videoId}
              image={item.image && item.image.childImageSharp.gatsbyImageData}
            />
          </a.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TileContainer;
