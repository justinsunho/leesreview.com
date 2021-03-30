import React from "react";
import { Link } from "gatsby";
import { SmallCaps } from "components/atoms";
import {
    section,
    bottomSectionWrapper,
    bottomSection,
    textWrapper,
    smallCaps,
    heading,
    descriptionStyle,
    buttonWrapper,
} from "./styles.module.scss";

const BottomSection = ({ buttonLink, buttonText, description, subtitle, title }) => {
    return (
        <div className={`section ${section}`}>
            <div className={`${bottomSectionWrapper}`}>
                <div className={`row flex-md-row flex-column ${bottomSection}`}>
                    <div className={`col-lg-10 col-md-8`}>
                        <div className={`${textWrapper}`}>
                            <SmallCaps className={`${smallCaps}`}>{subtitle}</SmallCaps>
                            <h2 className={heading}>{title}</h2>
                            <p className={descriptionStyle}>{description}</p>
                        </div>
                    </div>
                    <div
                        className={`col-lg-2 col-md-4 d-flex align-items-center justify-content-center ${buttonWrapper}`}
                    >
                        <Link to={buttonLink}>{buttonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
