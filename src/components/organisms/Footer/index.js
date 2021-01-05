import React from "react";
import { Info, SocialLinks } from "components/molecules";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footerContent} container`}>
                <Info address={true} className={styles.info} smallCapsClass={styles.smallCaps} />
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
