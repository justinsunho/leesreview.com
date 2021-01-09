import React from "react";
import styles from "./styles.module.scss";

const CarouselContainer = ({ children, currentIndex, setIndex, itemCount }) => {
    return (
        <div className={styles.testimonyCarousel}>
            {children}
            <div className={`${styles.controls}`}>
                <svg
                    className={`${styles.arrowLeft} ${currentIndex === 0 && styles.disabled}`}
                    width="16"
                    height="16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        setIndex(currentIndex - 1);
                    }}
                >
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
                </svg>

                {[...Array(itemCount)].map((x, i) => (
                    <svg
                        height="8"
                        width="8"
                        fill="currentColor"
                        className={`${i === currentIndex && styles.current} ${styles.dot}`}
                        onClick={() => {
                            setIndex(i);
                        }}
                    >
                        <circle cx="4" cy="4" r="4" />
                    </svg>
                ))}
                <svg
                    className={`${styles.arrowRight} ${currentIndex === itemCount - 1 && styles.disabled}`}
                    width="16"
                    height="16"
                    fill="currentColor"
                    onClick={() => {
                        setIndex(currentIndex + 1);
                    }}
                >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                </svg>
            </div>
        </div>
    );
};

export default CarouselContainer;
