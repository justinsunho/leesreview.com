import React from "react";
import { SmallCaps } from "components/atoms";
import { MainLayout } from "components/layouts";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as styles from "./styles.module.scss";
import { marginAutoCenter } from "theme/utilities.module.scss";

const Staff = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: { image, subtitle, tags, title },
            html
        }
    } = data;

    return (
        <MainLayout>
            <div className={`section ${styles.infoWrapper}`}>
                <div className={`row ${styles.imageWrapper}`}>
                    <div className={`col`}>
                        <GatsbyImage
                            alt={`staff-picture-${title}`}
                            className={styles.image}
                            image={image?.childImageSharp.gatsbyImageData}
                            style={{ display: "block" }}
                        />
                    </div>
                </div>
                <div className={`${styles.titleWrapper} row`}>
                    <div className={`col-md-9 ${marginAutoCenter}`}>
                        <SmallCaps className={styles.smallCaps}>
                            {subtitle}
                        </SmallCaps>
                        <h1 className={styles.title}>{title}</h1>
                        {tags && <div>{tags.map(tag => tag + ", ")}</div>}
                    </div>
                </div>
            </div>

            <div className={`section ${styles.contentContainer}`}>
                <div className={`row`}>
                    <div
                        className={`longform col-md-8 ${marginAutoCenter}`}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default Staff;

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                description
                tags
                image {
                    childImageSharp {
                        gatsbyImageData(width: 900, layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;
