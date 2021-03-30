import React from "react";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const MethodsContainer = ({ backgroundClassName, items, title }) => {
    return (
        <SectionWrapper backgroundClassName={backgroundClassName} title={title}>
            {items.map((item, i) => (
                <MethodItem
                    color={colorArray[i]}
                    description={item.description}
                    image={item.image.childImageSharp.gatsbyImageData}
                    index={i + 1}
                    itemLength={items.length}
                    key={item.title}
                    title={item.title}
                />
            ))}
        </SectionWrapper>
    );
};

export default MethodsContainer;
