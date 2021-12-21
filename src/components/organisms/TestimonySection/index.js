import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTransition, animated, useTrail } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import BigQuote from "./BigQuote";
import CarouselContainer from "./CarouselContainer";
import TestimonyItem from "./TestimonyItem";
import * as styles from "./styles.module.scss";

const TestimonySection = ({
  curve,
  linkHref,
  linkText,
  subtitle,
  testimonyList
}) => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  const { inView, ref } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const transitions = useTransition(
    testimonyList[testimonyIndex],
    testimonyList => testimonyList.node.id,
    {
      from: {
        opacity: 0,
        transform: "translateX(-10px)",
        visibility: "hidden",
        height: 0
      },
      enter: {
        opacity: 1,
        transform: "translateX(0)",
        visibility: "visible",
        height: "auto"
      },
      leave: {
        opacity: 0,
        transform: "translateX(-10px)",
        visibility: "hidden",
        height: 0
      }
    }
  );

  const trail = useTrail(2, {
    to: inView
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(-10px)" },
    from: { opacity: 0, transform: "translateY(-10px)" },
    config: { mass: 15, tension: 2000, friction: 200 }
  });

  const AnimatedCTALink = animated(CTALink);
  const AnimatedSmallCaps = animated(SmallCaps);

  return (
    <div className={` ${styles.container}`} ref={ref}>
      {curve && <Curve />}
      <div className={`section`}>
        <div
          className={`row align-items-start flex-column-reverse flex-md-row`}
        >
          <div className={`col-md-6`}>
            <AnimatedSmallCaps style={trail[0]}>{subtitle}</AnimatedSmallCaps>
            {transitions.map(({ item, key, props }) => (
              <animated.div key={key} style={{ ...props }}>
                <BigQuote quote={item.node.rawMarkdownBody} />
              </animated.div>
            ))}
            <AnimatedCTALink linkHref={linkHref} style={trail[1]}>
              {linkText}
            </AnimatedCTALink>
          </div>
          <div className={`col-md-6`}>
            <CarouselContainer
              currentIndex={testimonyIndex}
              itemCount={testimonyList.length}
              setIndex={setTestimonyIndex}
              testimonyList={testimonyList}
            >
              {transitions.map(({ item, key, props }) => {
                const {
                  college,
                  image,
                  tags,
                  title,
                  videoId
                } = item.node.frontmatter;

                return (
                  <animated.div key={key} style={{ ...props }}>
                    <TestimonyItem
                      college={college}
                      image={image}
                      inView={inView}
                      tags={tags}
                      title={title}
                      videoId={videoId}
                    />
                  </animated.div>
                );
              })}
            </CarouselContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonySection;

const Curve = () => (
  <div className={styles.curve}>
    <svg
      fill="none"
      viewBox={`0 0 1200 270`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1211 205.999C938 -319.001 389 348 0.5 174.5V303.5H1211V205.999Z"
        fill="#265674"
        opacity="0.1"
      />
    </svg>
  </div>
);
