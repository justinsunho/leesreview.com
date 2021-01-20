import React from "react";
import { SmallCaps } from "components/atoms";
import { MainLayout } from "components/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import utilities from "theme/utilities.module.scss";
import styles from "./styles.module.scss";

const Staff = ({ data }) => {
    const {
        markdownRemark: {
            html,
            frontmatter: { title, subtitle, description, tags, color, image },
        },
    } = data;

    return (
        <MainLayout>
            <div className={`${styles.infoWrapper}`}>
                <div className={`row ${styles.imageWrapper}`}>
                    <div className={`col`}>
                        <Img alt="test" className={styles.image} fluid={image.childImageSharp.fluid} />
                    </div>
                </div>
                <div className={`${styles.titleWrapper} row`}>
                    <div className={`col-lg-10 ${utilities.marginAutoCenter}`}>
                        <SmallCaps className={styles.smallCaps}>{subtitle}</SmallCaps>
                        <h1 className={styles.title}>{title}</h1>
                        <div>{tags.map((tag) => tag + ", ")}</div>
                    </div>
                </div>
            </div>

            <div className={`row`}>
                <div
                    className={`longform col-lg-8 ${styles.content} ${utilities.marginAutoCenter}`}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </MainLayout>
    );
};

export default Staff;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                description
                tags
                color
                image {
                    childImageSharp {
                        fluid(maxWidth: 900) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
