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
import { methodBackgroundClassName, priceCardBackgroundClassName } from "./styles.module.scss";

const CollegeConsulting = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, mediaSection, methodsList, priceList, testimonies, signUp },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.gatsbyImageData}
            />
            <TileContainer title={`Our College Consulting`} items={servicesList} />
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
                subtitle={testimonies.subtitle}
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
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
