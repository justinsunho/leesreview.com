import React from "react";
import { graphql } from "gatsby";
import { Hero, TestimonialCardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const Testimonials = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonials: { edges: testimonialEdges }
    } = data;

    const {
        node: {
            frontmatter: { title }
        }
    } = pageEdges[0];

    const test = testimonialEdges.map(testimonialEdge => {
        return {
            ...testimonialEdge.node.frontmatter,
            body: testimonialEdge.node.rawMarkdownBody
        };
    });

    return (
        <MainLayout>
            <Hero headingText={title} />
            <TestimonialCardContainer items={test} />
        </MainLayout>
    );
};

export default Testimonials;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "Testimonials" } } }
        ) {
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
        testimonials: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/testimonials/" } }
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
