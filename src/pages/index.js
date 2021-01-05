import React from "react";
import { graphql } from "gatsby";
import { MainLayout } from "components/layouts";

const Index = ({ data }) => {
    const {
        allPagesJson: { edges },
    } = data;

    const {
        node: { title, hero },
    } = edges[0];

    return <MainLayout>{title}</MainLayout>;
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
