import React from "react";
import { quoteStyle } from "./styles.module.scss";

const BigQuote = ({ quote }) => {
    return <p className={`${quoteStyle}`}>{quote}</p>;
};

export default BigQuote;
