import React from "react";
import { graphql } from "gatsby";
import { HomeHeroSection, MediaSection, TestimonySection, LinkCardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";
import { pageGradient, linkCardBackground } from "./styles.module.scss";

const Index = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
    } = data;

    const {
        node: {
            frontmatter: { hero, classes, about, testimonies, location },
        },
    } = pageEdges[0];

    return (
        <MainLayout className={pageGradient}>
            <HomeHeroSection
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={hero.image.childImageSharp.fluid}
                button
            />
            <LinkCardContainer
                title={classes.title}
                items={classes.classList}
                linkText={classes.linkText}
                linkHref={classes.linkHref}
                backgroundClassName={linkCardBackground}
            />
            <MediaSection
                image={about.image.childImageSharp.fluid}
                subtitle={about.subtitle}
                headingText={about.title}
                description={about.description}
                linkText={about.linkText}
                linkHref={about.linkHref}
                ribbon={true}
            />
            <TestimonySection
                subtitle={testimonies.subtitle}
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
                testimonyList={testimonyList}
            />
            <LinkCardContainer subtitle={location.subtitle} title={location.title} items={location.locationList} />
        </MainLayout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
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
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "Home" } } }) {
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
