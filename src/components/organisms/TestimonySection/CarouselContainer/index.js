import React from "react";
import * as styles from "./styles.module.scss";

const CarouselContainer = ({ children, currentIndex, itemCount, setIndex }) => {
    return (
        <div className={styles.testimonyCarousel}>
            {children}
            <div className={`${styles.controls}`}>
                <svg
                    className={` ${currentIndex === 0 && styles.disabled}`}
                    fill="currentColor"
                    height="16"
                    onClick={() => {
                        setIndex(currentIndex - 1);
                    }}
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
                </svg>

                {[...Array(itemCount)].map((x, i) => (
                    <svg
                        className={`${i === currentIndex && styles.current} ${styles.dot}`}
                        fill="currentColor"
                        height="8"
                        key={i}
                        onClick={() => {
                            setIndex(i);
                        }}
                        width="8"
                    >
                        <circle cx="4" cy="4" r="4" />
                    </svg>
                ))}
                <svg
                    className={`${currentIndex === itemCount - 1 && styles.disabled}`}
                    fill="currentColor"
                    height="16"
                    onClick={() => {
                        setIndex(currentIndex + 1);
                    }}
                    width="16"
                >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                </svg>
            </div>
        </div>
    );
};

export default CarouselContainer;
