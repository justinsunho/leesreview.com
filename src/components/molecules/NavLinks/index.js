import React from "react";
import { Link } from "gatsby";
import { Button } from "components/atoms";
import styles from "./styles.module.scss";

const NavLinks = () => {
    return (
        <ul className={styles.navLinkWrapper}>
            <li className={styles.navLink}>
                <Link activeClassName={styles.activeLink} to="/SAT">
                    SAT
                </Link>
            </li>
            <li className={styles.navLink}>
                <Link activeClassName={styles.activeLink} to="/college-consulting">
                    College Consulting
                </Link>
            </li>
            <li className={styles.navLink}>
                <Link activeClassName={styles.activeLink} to="/about">
                    About Us
                </Link>
            </li>
            <li className={styles.navLink}>
                <Link activeClassName={styles.activeLink} to="/schedule">
                    Schedule
                </Link>
            </li>
            <li>
                <Button to="/contact">Contact</Button>
            </li>
        </ul>
    );
};

export default NavLinks;
