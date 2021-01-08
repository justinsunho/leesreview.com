import React from "react";
import Img from "gatsby-image";
import { SmallCaps } from "components/atoms";
import styles from "./styles.module.scss";

const TestimonyCarousel = ({ testimonyList, testimonyIndex, linkHref, setTestimonyIndex }) => {
    const { title, tags, description, icon, image } = testimonyList[testimonyIndex];

    return (
        <div className={styles.testimonyCarousel}>
            <Img
                className={`${styles.image}`}
                fluid={{ ...image.childImageSharp.fluid, aspectRatio: 1 }}
                style={{ position: "absolute" }}
            />
            <div className={styles.content}>
                <div className={styles.tagContainer}>
                    {tags.map((tag) => (
                        <SmallCaps className={styles.tag}>{tag}</SmallCaps>
                    ))}
                </div>
                <h4 className={styles.heading}>{title}</h4>

                <p className={styles.description}>{description}</p>
                <Img className={`${styles.icon}`} fixed={{ ...icon.childImageSharp.fixed }} />
            </div>
            <div className={`${styles.controls}`}>
                <svg
                    className={`${styles.arrowLeft} ${testimonyIndex === 0 && styles.disabled}`}
                    width="16"
                    height="16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        setTestimonyIndex(testimonyIndex - 1);
                    }}
                >
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
                </svg>

                {[...Array(testimonyList.length)].map((x, i) => (
                    <svg
                        height="8"
                        width="8"
                        fill="currentColor"
                        className={`${i === testimonyIndex && styles.current} ${styles.dot}`}
                        onClick={() => {
                            setTestimonyIndex(i);
                        }}
                    >
                        <circle cx="4" cy="4" r="4" />
                    </svg>
                ))}
                <svg
                    className={`${styles.arrowRight} ${testimonyIndex === testimonyList.length - 1 && styles.disabled}`}
                    width="16"
                    height="16"
                    fill="currentColor"
                    onClick={() => {
                        setTestimonyIndex(testimonyIndex + 1);
                    }}
                >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                </svg>
            </div>
        </div>
    );
};

export default TestimonyCarousel;
