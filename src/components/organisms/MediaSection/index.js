import React from "react";
import { useInView } from "react-intersection-observer";
import { Ribbon, EmbedVideo } from "components/atoms";
import { TextBlock } from "components/molecules";
import { mediaSection, mediaSectionTextWrapper } from "./styles.module.scss";

const MediaSection = ({ image, subtitle, headingText, description, linkText, linkHref, ribbon, videoId }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={`section ${mediaSection}`}>
            {ribbon && <Ribbon inView={inView} image={image} alt={headingText} />}
            <div className={`row align-items-center ${mediaSectionTextWrapper}`} ref={ref}>
                <div className={`col-md-6`}>{videoId && <EmbedVideo videoId={videoId} title={headingText} />}</div>
                <div className={`col-md-6`}>
                    <TextBlock
                        subtitle={subtitle}
                        headingTag={"h2"}
                        headingText={headingText}
                        description={description}
                        linkText={linkText}
                        linkHref={linkHref}
                        inView={inView}
                        darkMode={ribbon && true}
                        primary
                    />
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
