import React from "react";
import { tileContainer, iconStyle, container, heading, descriptionStyle, videoContainer } from "./styles.module.scss";

const Tile = ({ icon, title, description, style, className, color, videoId }) => {
    return (
        <div className={`${className} ${tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {icon && (
                <div
                    className={iconStyle}
                    dangerouslySetInnerHTML={{ __html: icon }}
                    style={{ backgroundColor: `${color}` }}
                />
            )}
            {videoId && (
                <div className={videoContainer}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
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
