import React from "react";
import { graphql } from "gatsby";
import { SmallCaps } from "components/atoms";
import { Card } from "components/molecules";
import { Hero, MediaSection, TestimonySection, CardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";
import utilities from "theme/utilities.module.scss";

const Index = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { hero, classes, about, testimonies, location },
        },
    } = edges[0];

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.fluid}
                button
            />
            <CardContainer
                title={classes.title}
                items={classes.classList}
                linkText={classes.linkText}
                linkHref={classes.linkHref}
            />
            <MediaSection
                image={about.image.childImageSharp.fluid}
                subtitle={about.subtitle}
                headingText={about.title}
                description={about.description}
                linkText={about.linkText}
                linkHref={about.linkHref}
            />
            <TestimonySection
                subtitle={testimonies.subtitle}
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
                testimonyList={testimonies.testimonyList}
            />
            <CardContainer subtitle={location.subtitle} title={location.title} items={location.locationList} />
        </MainLayout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
            edges {
                node {
                    frontmatter {
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                            staff
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        classes {
                            title
                            linkText
                            linkHref
                            classList {
                                title
                                image {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                icon {
                                    code
                                }
                                description
                                linkText
                                linkHref
                            }
                        }
                        about {
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            subtitle
                            title
                            description
                            linkText
                            linkHref
                        }
                        testimonies {
                            subtitle
                            linkText
                            linkHref
                            testimonyList {
                                title
                                description
                                quote
                                tags
                                image {
                                    childImageSharp {
                                        fluid(maxHeight: 240) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                icon {
                                    childImageSharp {
                                        fixed(height: 32) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        }
                        location {
                            subtitle
                            title
                            locationList {
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
                        }
                    }
                }
            }
        }
    }
`;
