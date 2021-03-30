import React from "react";
import { SectionWrapper } from "components/molecules";
import * as styles from "./styles.module.scss";

const ScheduleSection = ({ description, linkHref, linkText, subtitle, table, title }) => {
    return (
        <SectionWrapper
            description={description}
            id={title}
            left={true}
            linkHref={linkHref}
            linkText={linkText}
            subtitle={subtitle}
            title={title}
        >
            <div className={styles.tableContainer} dangerouslySetInnerHTML={{ __html: table }} />
        </SectionWrapper>
    );
};

export default ScheduleSection;
