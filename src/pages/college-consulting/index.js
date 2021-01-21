import React from "react";
import { graphql } from "gatsby";
import { Hero, CardContainer, MethodsContainer, TestimonySection, PriceSection } from "components/organisms";
import { MainLayout } from "components/layouts";

const CollegeConsulting = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, methodsList, priceList, testimonies },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.fluid}
            />
            <CardContainer title={`Our College Consulting`} items={servicesList} />
            <MethodsContainer title={`Our Methods`} items={methodsList} />
            <TestimonySection
                subtitle={testimonies.subtitle}
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
                testimonyList={testimonyList}
            />
            <PriceSection title={`Our Prices`} items={priceList} />
            <div>Sign Up</div>
        </MainLayout>
    );
};

export default CollegeConsulting;

export const pageQuery = graphql`
    query {
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
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        servicesList {
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
