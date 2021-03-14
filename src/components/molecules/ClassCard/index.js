import React from "react";
import { Link } from "gatsby";
import {
    classCardContainer,
    classCardWrapper,
    heading,
    dateContainer,
    descriptionStyle,
    teacher,
    priceStyle,
} from "./styles.module.scss";

const ClassCard = ({ title, date, time, description, price, teacherName, teacherLink, backgroundColor }) => {
    return (
        <div className={`${classCardContainer}`}>
            <div className={`${classCardWrapper}`}>
                <h4 className={`${heading}`}>{title}</h4>
                {date && (
                    <div className={`${dateContainer}`}>
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                )}
                <p className={descriptionStyle} dangerouslySetInnerHTML={{ __html: description }} />
                {teacherName && (
                    <Link className={`${teacher}`} to={teacherLink}>
                        Taught by: {teacherName}
                    </Link>
                )}
            </div>
            <div className={`${priceStyle}`} style={{ backgroundColor: backgroundColor }}>
                {price}
            </div>
        </div>
    );
};

export default ClassCard;
