import React from "react";
import { graphql } from "gatsby";

const Index = ({ data }) => {
    const {
        allPagesJson: { edges },
    } = data;

    const {
        node: { title, hero },
    } = edges[0];

    return <div>{title}</div>;
};

export default Index;

export const pageQuery = graphql`
    query {
        allPagesJson(filter: { title: { eq: "Home" } }) {
            edges {
                node {
                    id
                    hero {
                        staff
                        description
                        buttonText
                        buttonLink
                        image
                    }
                    title
                }
            }
        }
    }
`;
