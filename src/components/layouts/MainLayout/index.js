import React from "react";
import { Header, Footer } from "components/organisms";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={`${styles.contentWrapper}`}>
                <main className={`container`}>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
