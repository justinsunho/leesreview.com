import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "components/atoms";
import {
    menuButtonContainer,
    openStyle,
    navLinkWrapper,
    navLink,
    activeLink,
    contactButton,
} from "./styles.module.scss";

const NavLinks = () => {
    const [open, setOpen] = useState(0);

    return (
        <>
            <div
                className={`${menuButtonContainer} ${open && openStyle}`}
                onClick={() => setOpen(!open)}
                role={`button`}
                onKeyDown={(e) => e.key === 13 && setOpen(!open)}
                tabIndex={0}
            >
                {open ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                            fillOpacity="0.54"
                        />
                    </svg>
                ) : (
                    <Button>menu</Button>
                )}
            </div>
            <ul className={`${navLinkWrapper} ${open && openStyle}`}>
                <li className={navLink}>
                    <Link activeClassName={activeLink} to="/SAT" tabIndex={0}>
                        SAT
                    </Link>
                </li>
                <li className={navLink}>
                    <Link activeClassName={activeLink} to="/college-consulting" tabIndex={0}>
                        College Consulting
                    </Link>
                </li>
                <li className={navLink}>
                    <Link activeClassName={activeLink} to="/classroom-prep" tabIndex={0}>
                        Classroom Prep
                    </Link>
                </li>
                <li className={navLink}>
                    <Link activeClassName={activeLink} to="/about" tabIndex={0}>
                        About Us
                    </Link>
                </li>
                <li className={navLink}>
                    <Link activeClassName={activeLink} to="/schedule" tabIndex={0}>
                        Schedule
                    </Link>
                </li>
                <li className={contactButton}>
                    <Button linkHref="/contact" secondary={true} tabIndex={0}>
                        Contact
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default NavLinks;
