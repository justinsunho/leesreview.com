import React from "react";
import { graphql } from "gatsby";
import { MainLayout } from "components/layouts";

const Schedule = ({ data }) => {
    const {
        page: { edges: pageEdges },
    } = data;

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
                    }
                }
            }
        }
    }
`;
