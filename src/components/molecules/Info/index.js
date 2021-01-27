import React from "react";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const Info = ({ address, className, smallCapsClass }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <SmallCaps className={smallCapsClass}>Phone: (909) 612-5700</SmallCaps>
            <SmallCaps className={smallCapsClass}>Email: info@leesreview.com</SmallCaps>
            {address && (
                <SmallCaps className={smallCapsClass}>Address: 2040 Brea Canyon Road, Diamond Bar, CA.</SmallCaps>
            )}
        </div>
    );
};

export default Info;
