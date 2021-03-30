import React from "react";
import { EmbedVideo } from "components/atoms";
import {
    tileContainer,
    iconStyle,
    container,
    heading,
    descriptionStyle,
    videoContainer,
    topItem,
} from "./styles.module.scss";

const Tile = ({ icon, title, description, style, className, color, videoId }) => {
    return (
        <div className={`${className} ${tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {videoId ? (
                <EmbedVideo videoId={videoId} className={videoContainer} />
            ) : (
                icon && (
                    <div
                        className={iconStyle}
                        dangerouslySetInnerHTML={{ __html: icon }}
                        style={{ backgroundColor: `${color}` }}
                    />
                )
            )}
            <div className={`${container} ${(icon || videoId) && topItem}`}>
                <h4 className={heading}>{title}</h4>
                <p className={descriptionStyle}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
