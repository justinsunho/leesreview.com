import React from "react";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const MethodsContainer = ({ items, title }) => {
    return (
        <SectionWrapper title={title}>
            {items.map((item, i) => (
                <MethodItem
                    title={item.title}
                    index={i + 1}
                    image={item.image.childImageSharp.fluid}
                    description={item.description}
                    itemLength={items.length}
                    color={colorArray[i]}
                />
            ))}
        </SectionWrapper>
    );
};

export default MethodsContainer;
