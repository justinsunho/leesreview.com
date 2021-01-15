import React from "react";
import { graphql } from "gatsby";
import { Hero, TestimonyCardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const Testimonies = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { title, testimonyList },
        },
    } = edges[0];

    return (
        <MainLayout>
            <Hero headingText={title} />
            <TestimonyCardContainer items={testimonyList} />
        </MainLayout>
    );
};

export default Testimonies;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Testimonies" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                        testimonyList {
                            title
                            college
                            tags
                            body
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
