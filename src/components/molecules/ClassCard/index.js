import React from 'react';
import { Link } from 'gatsby';
import * as styles from './styles.module.scss';

const ClassCard = ({
  backgroundColor,
  date,
  description,
  teacherLink,
  teacherName,
  time,
  title
}) => {
  return (
    <div className={`${styles.classCardContainer}`}>
      <div className={`${styles.classCardWrapper}`}>
        <h4 className={`${styles.heading}`}>{title}</h4>
        {date && (
          <div className={`${styles.dateContainer}`}>
            <div>{date}</div>
            <div>{time}</div>
          </div>
        )}
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {teacherName && (
          <Link className={`${styles.teacher}`} to={teacherLink}>
            Taught by: {teacherName}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
