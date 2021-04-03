import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { Logo } from "components/atoms";
import { Info } from "components/molecules";
import NavLinks from "./NavLinks";
import * as styles from "./styles.module.scss";

const Header = ({ bannerDarkMode }) => {
    const [isSticky, setSticky] = useState(1);

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
        <header
            className={`${styles.headerContainer} ${!isSticky ? styles.sticky : ""} ${
                bannerDarkMode && isSticky && styles.darkMode
            }`}
            ref={ref}
        >
            <div className={`${styles.header} container`}>
                <Link className={styles.logo} to="/">
                    <Logo />
                </Link>
                <NavLinks darkMode={bannerDarkMode && isSticky} />
                <div className={styles.infoContainer}>
                    <Info
                        address={false}
                        isInHeader={true}
                        smallCapsClass={`${styles.infoDarkMode} ${styles.darkSmallCaps}`}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
