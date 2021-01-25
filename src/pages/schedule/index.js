import React from "react";
import { graphql } from "gatsby";
import { MainLayout } from "components/layouts";

const Schedule = ({ data }) => {
    const {
        page: { edges: pageEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero },
        },
    } = pageEdges[0];

    return <MainLayout>test</MainLayout>;
};

export default Schedule;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Schedule" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                        hero {
                            title
                        }
                    }
                }
            }
        }
        schedules: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/schedules/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        description
                        linkText
                        linkHref
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
