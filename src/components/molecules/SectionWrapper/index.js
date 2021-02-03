import React from "react";
import { a } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const SectionWrapper = React.forwardRef(
    (
        {
            title,
            subtitle,
            children,
            className,
            trailArray,
            linkText,
            linkHref,
            description,
            left,
            backgroundStyles,
            id,
        },
        ref
    ) => {
        return (
            <div className={`section ${className}`} ref={ref} id={id}>
                <div className={backgroundStyles}>
                    {subtitle && (
                        <a.div className={`row`} style={trailArray && trailArray[0]}>
                            <div className={`col ${!left && utilities.textCenter}`}>
                                <SmallCaps>{subtitle}</SmallCaps>
                            </div>
                        </a.div>
                    )}
                    {title && (
                        <a.div className={`row ${styles.title}`} style={trailArray && trailArray[1]}>
                            <h2 className={`col ${!left && utilities.textCenter}`}>{title}</h2>
                        </a.div>
                    )}
                    {description && (
                        <div className={`row`}>
                            <p className={`col ${!left && utilities.textCenter}`}>{description}</p>
                        </div>
                    )}
                    {children}
                    {linkText && (
                        <a.div className={`row ${styles.ctaRow}`} style={trailArray && trailArray[2]}>
                            <CTALink linkHref={linkHref} className={`${!left && utilities.textCenter} col`}>
                                {linkText}
                            </CTALink>
                        </a.div>
                    )}
                </div>
            </div>
        );
    }
);

export default SectionWrapper;
