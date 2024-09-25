import React from "react";
import { TestimonialCard, SectionWrapper } from "components/molecules";
import { colorArray } from "utilities/colorArray";

const TestimonialCardContainer = ({ items }) => {
    return (
        <SectionWrapper>
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-md-4`} key={item.title}>
                        <TestimonialCard
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

export default TestimonialCardContainer;
