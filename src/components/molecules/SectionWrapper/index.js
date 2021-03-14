import React from "react";
import { a } from "react-spring";
import { SmallCaps, CTALink } from "components/atoms";
import { ctaRow } from "./styles.module.scss";

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
            backgroundClassName,
            id,
        },
        ref
    ) => {
        return (
            <div className={`section ${className}`} ref={ref} id={id}>
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
                        <a.div className={`row ${ctaRow}`} style={trailArray && trailArray[2]}>
                            <CTALink linkHref={linkHref} className={`${!left && "text-center"} col`}>
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
