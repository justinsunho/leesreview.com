import React from "react";
import { EmbedVideo } from "components/atoms";
import {
    container,
    descriptionStyle,
    heading,
    iconStyle,
    tileContainer,
    topItem,
    videoContainer,
} from "./styles.module.scss";

const Tile = ({ className, color, description, icon, style, title, videoId }) => {
    return (
        <div className={`${className} ${tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {videoId ? (
                <EmbedVideo alt={title} className={videoContainer} videoId={videoId} />
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
