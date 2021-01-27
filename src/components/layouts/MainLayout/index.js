import React from "react";
import { Header, Footer } from "components/organisms";
import styles from "./styles.module.scss";

const MainLayout = ({ children, className }) => {
    return (
        <div className={`${styles.layout} ${className}`}>
            <Header />
            <div className={`${styles.contentWrapper}`}>
                <main className={`container`}>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
