import React from "react";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import styles from "./styles.module.scss";

const Hero = ({ headingText, description, linkText, linkHref, button, image, className }) => {
    return (
        <div className={`${styles.hero} row align-items-center ${className}`}>
            <TextBlock
                className="col-md-6"
                headingTag={"h1"}
                headingText={headingText}
                description={description}
                linkText={linkText}
                linkHref={linkHref}
                button={button}
            />
            <div className={"col-md-6"}>
                <Image image={image} />
            </div>
        </div>
    );
};

export default Hero;
