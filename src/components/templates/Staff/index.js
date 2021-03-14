import React from "react";
import { SmallCaps } from "components/atoms";
import { MainLayout } from "components/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
    infoWrapper,
    imageWrapper,
    imageStyle,
    titleWrapper,
    smallCaps,
    titleStyle,
    contentContainer,
    marginAutoCenter,
} from "./styles.module.scss";

const Staff = ({ data }) => {
    const {
        markdownRemark: {
            html,
            frontmatter: { title, subtitle, tags, image },
        },
    } = data;

    return (
        <MainLayout>
            <div className={`section ${infoWrapper}`}>
                <div className={`row ${imageWrapper}`}>
                    <div className={`col`}>
                        <Img alt="test" className={imageStyle} fluid={image.childImageSharp.fluid} />
                    </div>
                </div>
                <div className={`${titleWrapper} row`}>
                    <div className={`col-md-10 ${marginAutoCenter}`}>
                        <SmallCaps className={smallCaps}>{subtitle}</SmallCaps>
                        <h1 className={titleStyle}>{title}</h1>
                        <div>{tags.map((tag) => tag + ", ")}</div>
                    </div>
                </div>
            </div>

            <div className={`section ${contentContainer}`}>
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
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                description
                tags
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
