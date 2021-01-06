import React from "react";
import { CTALink } from "components/atoms";
import styles from "./styles.module.scss";

const Card = ({ title, image, icon, description, linkText, linkHref }) => {
    return (
        <a href={linkHref} className={styles.card}>
            <img src={image} />
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{description}</p>
            <CTALink>{linkText}</CTALink>
        </a>
    );
};

export default Card;
