import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "components/atoms";
import * as styles from "./styles.module.scss";

const NavLinks = ({ darkMode }) => {
    const [open, setOpen] = useState(0);

    return (
        <>
            <div
                className={`${styles.menuButtonContainer} ${open && styles.open}`}
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
                role={`button`}
                tabIndex={0}
            >
                {open ? (
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                            fillOpacity="0.54"
                        />
                    </svg>
                ) : (
                    <svg height="20" styles={{ padding: "0.5rem" }} viewBox="0 0 50 40" width="20">
                        <rect height="4" width="50"></rect>
                        <rect height="4" width="50" y="15"></rect>
                        <rect height="4" width="50" y="30"></rect>
                    </svg>
                )}
            </div>
            <ul className={`${styles.navLinkWrapper} ${open && styles.open}  ${darkMode && styles.darkMode}`}>
                <li className={styles.navLink}>
                    <Link activeClassName={styles.activeLink} tabIndex={0} to="/SAT">
                        SAT
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link activeClassName={styles.activeLink} tabIndex={0} to="/college-consulting">
                        College Consulting
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link activeClassName={styles.activeLink} tabIndex={0} to="/classroom-prep">
                        Classroom Prep
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link activeClassName={styles.activeLink} tabIndex={0} to="/about">
                        About Us
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link activeClassName={styles.activeLink} tabIndex={0} to="/schedule">
                        Schedule
                    </Link>
                </li>
                <li className={styles.contactButton}>
                    <Button linkHref="/contact" tabIndex={0}>
                        Contact
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default NavLinks;
