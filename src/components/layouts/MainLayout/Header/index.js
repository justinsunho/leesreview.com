import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { Logo } from "components/atoms";
import { Info } from "components/molecules";
import NavLinks from "./NavLinks";
import { headerContainer, sticky, header, logo, infoContainer } from "./styles.module.scss";

const Header = () => {
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
        <header className={`${headerContainer} ${!isSticky ? sticky : ""}`} ref={ref}>
            <div className={`${header} container`}>
                <Link className={logo} to="/">
                    <Logo />
                </Link>
                <NavLinks />
                <div className={infoContainer}>
                    <Info address={false} />
                </div>
            </div>
        </header>
    );
};

export default Header;
