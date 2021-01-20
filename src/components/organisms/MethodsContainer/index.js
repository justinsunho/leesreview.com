import React from "react";
import Img from "gatsby-image";
import { MethodItem } from "components/molecules";
import utilities from "theme/utilities.module.scss";

const MethodsContainer = ({ items, title }) => {
    const color = ["#eb5757", "#f2994a", "#f2c94c", "#219653", "#9b51e0"];

    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
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
        </div>
    );
};

export default MethodsContainer;
