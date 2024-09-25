import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { a, useTrail } from "react-spring";
import { SmallCaps } from "components/atoms";
import * as styles from "./styles.module.scss";
import { enterAbove } from "utilities/springConfigs";

const TestimonialItem = ({ college, image, inView, tags, title, videoId }) => {
    const trail = useTrail(5, {
        ...enterAbove(inView),
        config: { mass: 15, tension: 2000, friction: 200 }
    });

    const [playVideo, setPlayVideo] = useState(0);

    return (
        <div className={styles.testimonialItem}>
            <div
                className={`${styles.thumbnailContainer} ${
                    videoId && styles.videoContainer
                }`}
                onClick={() => videoId && setPlayVideo(1)}
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
                    <>
                        <GatsbyImage
                            alt={`testimonial-item-image-${title}`}
                            className={`${styles.image}`}
                            style={{ position: "absolute" }}
                            image={{
                                ...image.childImageSharp.gatsbyImageData,
                                aspectRatio: 1
                            }}
                        />
                        {videoId && (
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
                        )}
                    </>
                )}
            </div>
            <div className={styles.content}>
                <a.div className={styles.tagContainer} style={trail[1]}>
                    {tags.map(tag => (
                        <SmallCaps className={styles.tag} key={tag}>
                            {tag}
                        </SmallCaps>
                    ))}
                </a.div>
                <a.h4 style={trail[2]}>{title}</a.h4>

                <a.p style={trail[3]}>{college}</a.p>
            </div>
        </div>
    );
};

export default TestimonialItem;
