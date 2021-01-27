import React from "react";
import { graphql } from "gatsby";
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
            <MediaHero headingText={hero.title} description={hero.description}>
                <div dangerouslySetInnerHTML={{ __html: hero.video.code }} />
            </MediaHero>
            <TileContainer title={`Online Services`} items={servicesList} />
            <BottomSection
                title={signUp.title}
                subtitle={signUp.subtitle}
                description={signUp.description}
                buttonText={signUp.buttonText}
                buttonLink={signUp.buttonLink}
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
                            video {
                                code
                            }
                        }
                        servicesList {
                            title
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
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
