import React from "react";
import { SectionWrapper } from "components/molecules";
import styles from "./styles.module.scss";
import "./style.scss";

const ScheduleSection = ({ title, subtitle, description, linkText, linkHref, table }) => {
    return (
        <SectionWrapper
            title={title}
            subtitle={subtitle}
            description={description}
            linkText={linkText}
            linkHref={linkHref}
            left={true}
        >
            <div className={styles.tableContainer} dangerouslySetInnerHTML={{ __html: table }} />
        </SectionWrapper>
    );
};

export default ScheduleSection;
