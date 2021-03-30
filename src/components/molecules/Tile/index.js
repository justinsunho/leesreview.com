import React from "react";
import { EmbedVideo } from "components/atoms";
import * as styles from "./styles.module.scss";

const Tile = ({ className, color, description, icon, style, title, videoId }) => {
    return (
        <div className={`${className} ${styles.tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {videoId ? (
                <EmbedVideo alt={title} className={styles.videoContainer} videoId={videoId} />
            ) : (
                icon && (
                    <div
                        className={styles.icon}
                        dangerouslySetInnerHTML={{ __html: icon }}
                        style={{ backgroundColor: `${color}` }}
                    />
                )
            )}
            <div className={`${styles.container} ${(icon || videoId) && styles.topItem}`}>
                <h4 className={styles.heading}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
