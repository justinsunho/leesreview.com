import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    MediaSection,
    TileContainer,
    MethodsContainer,
    TestimonySection,
    PriceCardContainer,
    BottomSection,
} from "components/organisms";
import { MainLayout } from "components/layouts";
import { pageGradient, methodBackgroundClassName, priceCardBackgroundClassName } from "./styles.module.scss";

const SAT = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, mediaSection, methodsList, priceList, signUp },
        },
    } = pageEdges[0];

    return (
        <MainLayout className={pageGradient}>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.gatsbyImageData}
            />
            <TileContainer title={`Our SAT Services`} items={servicesList} />
            <MediaSection
                image={mediaSection.image.childImageSharp.gatsbyImageData}
                subtitle={mediaSection.subtitle}
                headingText={mediaSection.title}
                description={mediaSection.description}
                linkText={mediaSection.linkText}
                linkHref={mediaSection.linkHref}
                ribbon={true}
            />
            <MethodsContainer
                backgroundClassName={methodBackgroundClassName}
                title={`Our Methods`}
                items={methodsList}
            />
            <TestimonySection
                subtitle={`SAT Stories`}
                linkHref={`/testimonies`}
                linkText={`See more stories`}
                testimonyList={testimonyList}
                curve
            />
            <PriceCardContainer
                backgroundClassName={priceCardBackgroundClassName}
                title={`Our Prices`}
                items={priceList}
            />
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

export default SAT;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "SAT" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        servicesList {
                            title
                            description
                            videoId
                            icon {
                                code
                            }
                        }
                        mediaSection {
                            subtitle
                            title
                            description
                            linkText
                            linkHref
                            videoId
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        methodsList {
                            title
                            description
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        priceList {
                            title
                            price
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
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "SAT" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        college
                        tags
                        image {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
