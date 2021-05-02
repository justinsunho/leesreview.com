import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    TileContainer,
    MediaSection,
    MethodsContainer,
    TestimonySection,
    PriceCardContainer,
    BottomSection,
} from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const CollegeConsulting = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, mediaSection, methodsList, priceList, servicesList, signUp, testimonies },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <Hero
                description={hero.description}
                headingText={hero.title}
                image={hero.image.childImageSharp.gatsbyImageData}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
            />
            <TileContainer items={servicesList} title={`Our College Consulting`} />
            <MediaSection
                description={mediaSection.description}
                headingText={mediaSection.title}
                image={mediaSection.image.childImageSharp.gatsbyImageData}
                linkHref={mediaSection.linkHref}
                linkText={mediaSection.linkText}
                ribbon={true}
                subtitle={mediaSection.subtitle}
            />
            <MethodsContainer
                backgroundClassName={styles.methodBackgroundClassName}
                items={methodsList}
                title={`Our Methods`}
            />
            <TestimonySection
                curve
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
                subtitle={testimonies.subtitle}
                testimonyList={testimonyList}
            />
            <PriceCardContainer
                backgroundClassName={styles.priceCardBackgroundClassName}
                items={priceList}
                title={`Our Prices`}
            />
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

export default CollegeConsulting;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "College Consulting" } } }) {
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
                            icon {
                                code
                            }
                        }
                        mediaSection {
                            title
                            subtitle
                            description
                            linkText
                            linkHref
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
                        testimonies {
                            subtitle
                            linkText
                            linkHref
                        }
                        priceList {
                            title
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
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "College Consulting" } } }) {
            edges {
                node {
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
