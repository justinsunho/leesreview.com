import React from "react";
import { EmbedVideo } from "components/atoms";
import * as styles from "./styles.module.scss";

const Tile = ({
  className,
  color,
  description,
  icon,
  style,
  title,
  videoId,
  map
}) => {
  return (
    <div
      className={`${className} ${styles.tileContainer}`}
      style={{ ...style, borderLeft: `8px solid ${color}` }}
    >
      {videoId ? (
        <EmbedVideo
          alt={title}
          className={styles.videoContainer}
          videoId={videoId}
        />
      ) : (
        icon && (
          <div
            className={styles.icon}
            dangerouslySetInnerHTML={{ __html: icon }}
            style={{ backgroundColor: `${color}` }}
          />
        )
      )}
      {map && (
        <div className={styles.map} dangerouslySetInnerHTML={{ __html: map }} />
      )}
      <div
        className={`${styles.container} ${(icon || videoId) && styles.topItem}`}
      >
        <h4 className={styles.heading}>{title}</h4>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default Tile;
