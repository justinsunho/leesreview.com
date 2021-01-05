import React from "react";
import { Header, Footer } from "components/organisms";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={`${styles.contentWrapper} container`}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
