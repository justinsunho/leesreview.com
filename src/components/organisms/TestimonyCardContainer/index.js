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
                            body={item.body}
                            college={item.college}
                            color={colorArray[i % 5]}
                            image={item.image.childImageSharp.gatsbyImageData}
                            tags={item.tags}
                            title={item.title}
                            year={item.year}
                        />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TestimonyCardContainer;
