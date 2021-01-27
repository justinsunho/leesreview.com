import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";

const ClassCard = ({ title, date, time, description, price, tag, teacherName, teacherLink, backgroundColor }) => {
    return (
        <div className={`${styles.classCardContainer}`}>
            <div className={`${styles.classCardWrapper}`}>
                <h4 className={`${styles.heading}`}>{title}</h4>
                {/* {tag && (
                    <div className={`${styles.tag}`} style={{ backgroundColor: backgroundColor }}>
                        {tag}
                    </div>
                )} */}
                {date && (
                    <div className={`${styles.dateContainer}`}>
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                )}
                <p dangerouslySetInnerHTML={{ __html: description }} />
                {teacherName && (
                    <Link className={`${styles.teacher}`} to={teacherLink}>
                        Taught by: {teacherName}
                    </Link>
                )}
            </div>
            <div className={`${styles.price}`} style={{ backgroundColor: backgroundColor }}>
                {price}
            </div>
        </div>
    );
};

export default ClassCard;
