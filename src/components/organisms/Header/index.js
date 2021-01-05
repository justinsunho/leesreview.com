import React from "react";
import { Link } from "gatsby";
import { Logo } from "components/atoms";
import { NavLinks, Info } from "components/molecules";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <Link to="/">
                <Logo />
            </Link>
            <NavLinks />
            <Info address={false} />
        </header>
    );
};

export default Header;
