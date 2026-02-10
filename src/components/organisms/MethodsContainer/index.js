import React from "react";
import MethodItem from "./MethodItem";
import { SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const MethodsContainer = ({
    backgroundClassName,
    items,
    title,
    linkHref,
    linkText
}) => {
    return (
        <SectionWrapper
            backgroundClassName={backgroundClassName}
            title={title}
            linkHref={linkHref}
            linkText={linkText}
        >
            <div className={`row align-items-stretch justify-content-center`}>
                {items.map((item, i) => (
                    <div className={`col-lg-4`} key={item.title}>
                        <MethodItem
                            color={colorArray[i]}
                            description={item.description}
                            image={item.image?.childImageSharp.gatsbyImageData}
                            index={i + 1}
                            itemLength={items.length}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default MethodsContainer;
