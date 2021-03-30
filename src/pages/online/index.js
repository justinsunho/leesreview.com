import React from "react";
import { graphql } from "gatsby";
import { EmbedVideo } from "components/atoms";
import { MediaHero, TileContainer, BottomSection } from "components/organisms";
import { MainLayout } from "components/layouts";

const Online = ({ data }) => {
    const {
        page: { edges: pageEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, signUp },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <MediaHero description={hero.description} headingText={hero.title}>
                {hero.videoId && <EmbedVideo videoId={hero.videoId} />}
            </MediaHero>
            <TileContainer items={servicesList} title={`Online Services`} />
            <BottomSection
                buttonLink={signUp.buttonLink}
                buttonText={signUp.buttonText}
                description={signUp.description}
                subtitle={signUp.subtitle}
                title={signUp.title}
            />
        </MainLayout>
    );
};

export default Online;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Online" } } }) {
            edges {
                node {
                    frontmatter {
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                            videoId
                        }
                        servicesList {
                            title
                            icon {
                                code
                            }
                            description
                        }
                        signUp {
                            subtitle
                            title
                            description
                            buttonText
                            buttonLink
                        }
                    }
                }
            }
        }
    }
`;
