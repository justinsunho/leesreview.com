import React from "react";
import { graphql } from "gatsby";

const ClassroomPrep = ({ data }) => {
    return <div>test</div>;
};

export default ClassroomPrep;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Classroom Prep" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "Classroom Prep" } } }) {
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
