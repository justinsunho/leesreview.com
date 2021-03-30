import React from "react";
import { a } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import * as styles from "./styles.module.scss";

const SectionWrapper = React.forwardRef(
    (
        {
            backgroundClassName,
            children,
            className,
            description,
            id,
            left,
            linkHref,
            linkText,
            subtitle,
            title,
            trailArray,
        },
        ref
    ) => {
        return (
            <div className={`section ${className}`} id={id} ref={ref}>
                <div className={backgroundClassName}>
                    {subtitle && (
                        <a.div className={`row`} style={trailArray && trailArray[0]}>
                            <div className={`col ${!left && "text-center"}`}>
                                <SmallCaps>{subtitle}</SmallCaps>
                            </div>
                        </a.div>
                    )}
                    {title && (
                        <a.div className={`row`} style={trailArray && trailArray[1]}>
                            <h2 className={`col ${!left && "text-center"}`}>{title}</h2>
                        </a.div>
                    )}
                    {description && (
                        <div className={`row`}>
                            <p className={`col ${!left && "text-center"}`}>{description}</p>
                        </div>
                    )}
                    {children}
                    {linkText && (
                        <a.div className={`row ${styles.ctaRow}`} style={trailArray && trailArray[2]}>
                            <CTALink className={`${!left && "text-center"} col`} linkHref={linkHref}>
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
