import React, { useState } from "react";
import { SmallCaps, CTALink } from "components/atoms";
import { TestimonyCarousel, BigQuote } from "components/molecules";
import styles from "./styles.module.scss";

const TestimonySection = ({ subtitle, linkText, linkHref, testimonyList }) => {
    const [testimonyIndex, setTestimonyIndex] = useState(0);

    const transitions = useTransition(testimonyIndex, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <div className={`row align-items-center`}>
            <div className={`col-md-6`}>
                <SmallCaps>{subtitle}</SmallCaps>
                <BigQuote quote={testimonyList[testimonyIndex].quote} />
                <CTALink linkHref={linkHref}>{linkText}</CTALink>
            </div>
            <div className={`col-md-6`}>
                <TestimonyCarousel
                    testimonyList={testimonyList}
                    testimonyIndex={testimonyIndex}
                    linkHref={linkHref}
                    setTestimonyIndex={setTestimonyIndex}
                />
            </div>
        </div>
    );
};

export default TestimonySection;
