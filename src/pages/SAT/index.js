import React from "react";
import { graphql } from "gatsby";

const SAT = ({ data }) => {
    return <div>test</div>;
};

export default SAT;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "SAT" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "SAT" } } }) {
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
