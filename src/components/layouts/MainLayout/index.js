import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "utilities/seo";
import { Script } from "gatsby";
import * as styles from "./styles.module.scss";

const MainLayout = ({ bannerDarkMode, children, className }) => {
    return (
        <div className={`${styles.layout} ${className}`}>
            <SEO />
            <Header bannerDarkMode={bannerDarkMode} />
            <Script src="https://breakmyscore.com/js/ad-banner.js?bottom=20px&left=10px"></Script>
            <div className={`${styles.contentWrapper}`}>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
