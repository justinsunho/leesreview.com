import React from "react";
import { TextBlock } from "components/molecules";
import Img from "gatsby-image";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref }) => {
    return (
        <div className={`row align-items-center`}>
            <div className={`col-md-6`}>
                <Img fluid={image} />
            </div>
            <div className={`col-md-6`}>
                <TextBlock
                    subtitle={subtitle}
                    headingTag={"h2"}
                    headingText={headingText}
                    description={description}
                    linkText={linkText}
                    linkHref={linkHref}
                />
            </div>
        </div>
    );
};

export default MediaSection;
