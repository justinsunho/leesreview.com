import React from "react";
import { graphql } from "gatsby";
import { Hero, TestimonyCardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const Testimonies = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyEdges },
    } = data;

    const {
        node: {
            frontmatter: { title },
        },
    } = pageEdges[0];

    const test = testimonyEdges.map((testimonyEdge) => {
        return { ...testimonyEdge.node.frontmatter, body: testimonyEdge.node.rawMarkdownBody };
    });

    return (
        <MainLayout>
            <Hero headingText={title} />
            <TestimonyCardContainer items={test} />
        </MainLayout>
    );
};

export default Testimonies;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Testimonies" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                        }
                    }
                }
            }
        }
        testimonies: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/testimonies/" } }
            sort: { fields: frontmatter___year, order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        college
                        tags
                        year
                        image {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
