import React from "react";
import { useInView } from "react-intersection-observer";
import { Ribbon, EmbedVideo } from "components/atoms";
import { TextBlock } from "components/molecules";
import * as styles from "./styles.module.scss";

const MediaSection = ({ description, headingText, image, linkHref, linkText, ribbon, subtitle, videoId }) => {
    const { inView, ref } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={`section ${styles.mediaSection}`}>
            {ribbon && <Ribbon alt={headingText} image={image} inView={inView} />}
            <div className={`row align-items-center ${styles.mediaSectionTextWrapper}`} ref={ref}>
                <div className={`col-md-6`}>{videoId && <EmbedVideo title={headingText} videoId={videoId} />}</div>
                <div className={`col-md-6`}>
                    <TextBlock
                        darkMode={ribbon && true}
                        description={description}
                        headingTag={"h2"}
                        headingText={headingText}
                        inView={inView}
                        linkHref={linkHref}
                        linkText={linkText}
                        primary
                        subtitle={subtitle}
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
