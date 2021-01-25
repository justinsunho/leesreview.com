import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    MediaSection,
    TextBlockSection,
    MethodsContainer,
    TestimonySection,
    PriceSection,
} from "components/organisms";
import { MainLayout } from "components/layouts";

const SAT = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, mediaSection, methodsList, priceList },
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
            <TextBlockSection title={`Our SAT Services`} items={servicesList} />
            <MediaSection
                image={mediaSection.image.childImageSharp.fluid}
                subtitle={mediaSection.subtitle}
                headingText={mediaSection.title}
                description={mediaSection.description}
                linkText={mediaSection.linkText}
                linkHref={mediaSection.linkHref}
                ribbon={true}
            />
            <MethodsContainer title={`Our Methods`} items={methodsList} />
            <TestimonySection
                subtitle={`SAT Stories`}
                linkHref={`/testimonies`}
                linkText={`See more stories`}
                testimonyList={testimonyList}
            />
            <PriceSection title={`Our Prices`} items={priceList} />
            <div>Sign Up</div>
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
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
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
