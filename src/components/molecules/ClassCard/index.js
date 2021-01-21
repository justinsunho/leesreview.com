import React from "react";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const ClassCard = ({ title, date, time, description, price, tag, teacherName, teacherLink, backgroundColor }) => {
    return (
        <div className={`${styles.classCardContainer}`}>
            <div className={`${styles.classCardWrapper}`}>
                <h4 className={`${styles.heading}`}>{title}</h4>
                <div className={`${styles.tag}`} style={{ backgroundColor: backgroundColor }}>
                    {tag}
                </div>
                <div className={`${styles.dateContainer}`}>
                    <div>{date}</div>
                    <div>{time}</div>
                </div>
                <p>{description}</p>
                <a className={`${styles.teacher}`} href={teacherLink}>
                    Taught by: {teacherName}
                </a>
            </div>
            <div className={`${styles.price}`} style={{ backgroundColor: backgroundColor }}>
                {price}
            </div>
        </div>
    );
};

export default ClassCard;
