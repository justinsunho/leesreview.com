import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "utilities/seo";
import * as styles from "./styles.module.scss";
import { Helmet } from "react-helmet";

const MainLayout = ({ bannerDarkMode, children, className }) => {
    const [bannerShow, setBannerShow] = useState(true);

    return (
        <div className={`${styles.layout} ${className}`}>
            <SEO />
            <Header bannerDarkMode={bannerDarkMode} />
            <div className={`${styles.contentWrapper}`}>
                <main>{children}</main>
            </div>
            <div className={`${styles.adBanner}`}>
                {bannerShow && (
                    <a
                        href="https://breakmyscore.com?utm_source=yoursite&utm_medium=banner&utm_campaign=partner"
                        target="_blank"
                    >
                        <img
                            src="https://www.breakmyscore.com/ads/BreakMyScore-200x356-01.gif"
                            alt="BreakMyScore"
                            width="150"
                            height="267"
                        />
                    </a>
                )}
                <button
                    type="button"
                    className={`${styles.button}`}
                    onClick={() => setBannerShow(!bannerShow)}
                    tabindex="0"
                >
                    {bannerShow ? "-" : "+"}
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
