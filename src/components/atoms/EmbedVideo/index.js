import React, { useState } from "react";
import * as styles from "./styles.module.scss";

const EmbedVideo = ({ alt, className, videoId }) => {
  const [playVideo, setPlayVideo] = useState(0);

  return (
    <div
      className={`${styles.videoContainer} ${className}`}
      onClick={() => setPlayVideo(1)}
      onKeyDown={e => e.key === "Enter" && setPlayVideo(1)}
      role={"button"}
      tabIndex={0}
    >
      {playVideo ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.youtubeFrame}
          frameBorder="0"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${playVideo}`}
          title="YouTube video player"
          width="100%"
        />
      ) : (
        <div className={styles.thumbnailContainer}>
          <svg
            className={styles.playButton}
            fill="#FFF"
            height="64px"
            viewBox="0 0 24 24"
            width="64px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <img
            alt={`video-${alt}`}
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          />
        </div>
      )}
    </div>
  );
};

export default EmbedVideo;
