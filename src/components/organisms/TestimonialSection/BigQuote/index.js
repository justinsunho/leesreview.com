import React from "react";
import * as styles from "./styles.module.scss";

const BigQuote = ({ quote }) => {
    return <p className={`${styles.quote}`}>{quote}</p>;
};

export default BigQuote;
