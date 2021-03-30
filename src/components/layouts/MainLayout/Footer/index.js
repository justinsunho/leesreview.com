import React from "react";
import { Info } from "components/molecules";
import SocialLinks from "./SocialLinks";
import * as styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footerContent} container`}>
                <Info address={true} smallCapsClass={styles.smallCaps} />
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
