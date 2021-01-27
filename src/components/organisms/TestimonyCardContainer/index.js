import React from "react";
import { TestimonyCard, SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const TestimonyCardContainer = ({ items }) => {
    return (
        <SectionWrapper>
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-md-4`} key={item.title}>
                        <TestimonyCard
                            title={item.title}
                            college={item.college}
                            tags={item.tags}
                            body={item.body}
                            image={item.image.childImageSharp.fluid}
                            color={colorArray[i % 5]}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TestimonyCardContainer;
