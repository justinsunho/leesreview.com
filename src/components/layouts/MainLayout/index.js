import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles.module.scss";

const MainLayout = ({ children, className }) => {
    return (
        <div className={`${styles.layout} ${className}`}>
            <Header />
            <div className={`${styles.contentWrapper}`}>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
