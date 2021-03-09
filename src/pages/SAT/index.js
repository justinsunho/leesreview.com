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
import styles from "./styles.module.scss";

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
        <MainLayout className={styles.pageGradient}>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.fluid}
            />
            <TileContainer
                backgroundClassName={styles.tileContainerBackground}
                title={`Our SAT Services`}
                items={servicesList}
            />
            <MediaSection
                image={mediaSection.image.childImageSharp.fluid}
                subtitle={mediaSection.subtitle}
                headingText={mediaSection.title}
                description={mediaSection.description}
                linkText={mediaSection.linkText}
                linkHref={mediaSection.linkHref}
                ribbon={true}
            />
            <MethodsContainer
                backgroundClassName={styles.methodBackgroundClassName}
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
                backgroundClassName={styles.priceCardBackgroundClassName}
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
    query {
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
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        servicesList {
                            title
                            description
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
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        methodsList {
                            title
                            description
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
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
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
