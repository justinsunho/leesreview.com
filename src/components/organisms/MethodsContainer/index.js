import React from "react";
import { useInView } from "react-intersection-observer";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";
import styles from "./styles.module.scss";

const MethodsContainer = ({ backgroundClassName, items, title }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <SectionWrapper backgroundClassName={backgroundClassName} title={title} ref={ref}>
            {items.map((item, i) => (
                <MethodItem
                    title={item.title}
                    index={i + 1}
                    image={item.image.childImageSharp.fluid}
                    description={item.description}
                    itemLength={items.length}
                    color={colorArray[i]}
                    key={item.title}
                />
            ))}
        </SectionWrapper>
    );
};

export default MethodsContainer;
