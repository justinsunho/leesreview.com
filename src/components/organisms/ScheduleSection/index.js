import React from "react";
import { SectionWrapper } from "components/molecules";
import { tableContainer } from "./styles.module.scss";

const ScheduleSection = ({ title, subtitle, description, linkText, linkHref, table }) => {
    return (
        <SectionWrapper
            title={title}
            subtitle={subtitle}
            description={description}
            linkText={linkText}
            linkHref={linkHref}
            left={true}
            id={title}
        >
            <div className={tableContainer} dangerouslySetInnerHTML={{ __html: table }} />
        </SectionWrapper>
    );
};

export default ScheduleSection;
