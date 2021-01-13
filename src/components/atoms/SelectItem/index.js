import React from "react";
import styles from "./styles.module.scss";

const SelectItem = ({ children, onClick, className, style }) => {
    return (
        <h4 className={`${styles.selectItem} ${className}`} onClick={onClick}>
            {children}
        </h4>
    );
};

export default SelectItem;
