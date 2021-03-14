import React from "react";
import { Info } from "components/molecules";
import SocialLinks from "./SocialLinks";
import { footer, footerContent, smallCaps } from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={`${footer}`}>
            <div className={`${footerContent} container`}>
                <Info address={true} smallCapsClass={smallCaps} />
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
