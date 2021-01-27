import React from "react";
import styles from "./styles.module.scss";

const BigQuote = ({ quote }) => {
    return <p className={`${styles.quote} ${styles.second}`}>{quote}</p>;
};

export default BigQuote;
