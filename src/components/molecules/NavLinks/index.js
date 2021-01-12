import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "components/atoms";
import styles from "./styles.module.scss";

const NavLinks = () => {
    const [open, setOpen] = useState(0);

    return (
        <>
            <div className={`${styles.menuButtonContainer} ${open && styles.open}`} onClick={() => setOpen(!open)}>
                {open ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                            fill-opacity="0.54"
                        />
                    </svg>
                ) : (
                    <Button>menu</Button>
                )}
            </div>
            <ul className={`${styles.navLinkWrapper} ${open && styles.open}`}>
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
                <li className={styles.contactButton}>
                    <Button to="/contact">Contact</Button>
                </li>
            </ul>
        </>
    );
};

export default NavLinks;
