import React from "react";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import utilities from "theme/utilities.module.scss";

const MethodsContainer = ({ items, title }) => {
    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    return (
        <SectionWrapper title={title}>
            {items.map((item, i) => (
                <MethodItem
                    title={item.title}
                    index={i + 1}
                    image={item.image.childImageSharp.fluid}
                    description={item.description}
                    itemLength={items.length}
                    color={color[i]}
                />
            ))}
        </SectionWrapper>
    );
};

export default MethodsContainer;
