import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { layout, contentWrapper } from "./styles.module.scss";

const MainLayout = ({ children, className }) => {
    return (
        <div className={`${layout} ${className}`}>
            <Header />
            <div className={`${contentWrapper}`}>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
