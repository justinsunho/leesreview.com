import React, { useState } from "react";
import {
    tileContainer,
    iconStyle,
    container,
    heading,
    descriptionStyle,
    videoContainer,
    thumbnailContainer,
    playButton,
    youtubeFrame,
} from "./styles.module.scss";

const Tile = ({ icon, title, description, style, className, color, videoId }) => {
    const [playVideo, setPlayVideo] = useState(0);

    return (
        <div className={`${className} ${tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {icon && !videoId && (
                <div
                    className={iconStyle}
                    dangerouslySetInnerHTML={{ __html: icon }}
                    style={{ backgroundColor: `${color}` }}
                />
            )}
            {videoId && (
                <div className={videoContainer} onClick={() => setPlayVideo(1)}>
                    {playVideo ? (
                        <iframe
                            className={youtubeFrame}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=${playVideo}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    ) : (
                        <div className={thumbnailContainer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#FFF"
                                width="64px"
                                height="64px"
                                className={playButton}
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                            <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="video" />
                        </div>
                    )}
                </div>
            )}
            <div className={container}>
                <h4 className={heading}>{title}</h4>
                <p className={descriptionStyle}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
