import React from "react";
import { TestimonyCard } from "components/molecules";
import styles from "./styles.module.scss";

const TestimonyCardContainer = ({ items }) => {
    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    return (
        <div className={`section`}>
            <div className={`row`}>
                {items.map((item, i) => (
                    <div className={`col-md-4`} key={item.title}>
                        <TestimonyCard
                            title={item.title}
                            college={item.college}
                            tags={item.tags}
                            body={item.body}
                            image={item.image.childImageSharp.fluid}
                            color={color[i % 5]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonyCardContainer;
