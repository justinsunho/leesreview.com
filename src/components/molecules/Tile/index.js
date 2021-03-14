import React from "react";
import { tileContainer, iconStyle, container, heading, descriptionStyle } from "./styles.module.scss";

const Tile = ({ icon, title, description, style, className, color }) => {
    return (
        <div className={`${className} ${tileContainer}`} style={{ ...style, borderLeft: `8px solid ${color}` }}>
            {icon && (
                <div
                    className={iconStyle}
                    dangerouslySetInnerHTML={{ __html: icon }}
                    style={{ backgroundColor: `${color}` }}
                />
            )}
            <div className={container}>
                <h4 className={heading}>{title}</h4>
                <p className={descriptionStyle}>{description}</p>
            </div>
        </div>
    );
};

export default Tile;
