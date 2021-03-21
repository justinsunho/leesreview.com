import React from "react";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const MethodsContainer = ({ backgroundClassName, items, title }) => {
    return (
        <SectionWrapper backgroundClassName={backgroundClassName} title={title}>
            {items.map((item, i) => (
                <MethodItem
                    title={item.title}
                    index={i + 1}
                    image={item.image.childImageSharp.gatsbyImageData}
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
