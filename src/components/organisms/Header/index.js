import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { Logo } from "components/atoms";
import { NavLinks, Info } from "components/molecules";
import styles from "./styles.module.scss";

const Header = () => {
    const [isSticky, setSticky] = useState(0);

    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
            setSticky(window.scrollY === 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.headerContainer} ${!isSticky ? styles.sticky : ""}`} ref={ref}>
            <div className={`${styles.header} container`}>
                <Link to="/" className={styles.logo}>
                    <Logo />
                </Link>
                <NavLinks />
                <div className={styles.infoContainer}>
                    <Info address={false} />
                </div>
            </div>
        </header>
    );
};

export default Header;
