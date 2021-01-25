import React from "react";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const ScheduleSection = ({ title, subtitle, description, linkText, linkHref, table }) => {
    return (
        <div className={`section`}>
            <div className={`row`}>
                <SmallCaps className={`col`}>{subtitle}</SmallCaps>
            </div>
            <div className={`row`}>
                <h2 className={`col`}>{title}</h2>
            </div>
            <div className={`row`}>
                <p className={`col`}>{description}</p>
            </div>
            <div className={styles.tableContainer} dangerouslySetInnerHTML={{ __html: table }} />
            <div className={`row`}>
                <a className={`col`} href={linkHref}>
                    {linkText}
                </a>
            </div>
        </div>
    );
};

export default ScheduleSection;
