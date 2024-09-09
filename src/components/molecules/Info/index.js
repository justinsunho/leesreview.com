import React from "react";
import { SmallCaps } from "components/atoms";
import * as styles from "./styles.module.scss";

const Info = ({ address, className, smallCapsClass }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <SmallCaps className={smallCapsClass}>
                Phone: (909) 612-5700
            </SmallCaps>
            <SmallCaps className={smallCapsClass}>
                Phone: (909) 612-5701
            </SmallCaps>
            <SmallCaps className={smallCapsClass}>
                Email: info@leesreview.com
            </SmallCaps>

            {address && (
                <SmallCaps className={smallCapsClass}>
                    New Address: 19811 Colima Rd. #320 Walnut, CA 91789
                </SmallCaps>
            )}
        </div>
    );
};

export default Info;
