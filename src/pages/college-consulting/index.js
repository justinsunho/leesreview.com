import React from "react";
import { graphql } from "gatsby";

const CollegeConsulting = ({ data }) => {
    return <div>test</div>;
};

export default CollegeConsulting;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "College Consulting" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "College Consulting" } } }) {
            edges {
                node {
                    fronmatter {
                        title
                    }
                }
            }
        }
    }
`;
