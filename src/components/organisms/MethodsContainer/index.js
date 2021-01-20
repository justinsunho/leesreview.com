import React from "react";
import Img from "gatsby-image";
import utilities from "theme/utilities.module.scss";

const MethodsContainer = ({ items, title }) => {
    return (
        <div className={`section`}>
            <div className={`row`}>
                <h2 className={`col ${utilities.textCenter}`}>{title}</h2>
            </div>
            {items.map((item) => (
                <div className={`row`}>
                    <div className={`col`}>{item.title}</div>
                    <div>{item.description}</div>
                    <Img fluid={item.image.childImageSharp.fluid} />
                </div>
            ))}
        </div>
    );
};

export default MethodsContainer;
