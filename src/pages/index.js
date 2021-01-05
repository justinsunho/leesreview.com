import React from "react";
import { graphql } from "gatsby";
import { Hero } from "components/organisms";
import { MainLayout } from "components/layouts";

const Index = ({ data }) => {
    const {
        allPagesJson: { edges },
    } = data;

    const {
        node: { title, hero },
    } = edges[0];

    return (
        <MainLayout>
            <Hero
                className={"section"}
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={"/images/pages/dsc02671.jpg"}
                button
            />
        </MainLayout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allPagesJson(filter: { title: { eq: "Home" } }) {
            edges {
                node {
                    id
                    hero {
                        title
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
