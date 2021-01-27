import React from "react";
import { graphql } from "gatsby";
import { Hero, ClassCardContainer, MediaSection, TileBlockSection, BottomSection } from "components/organisms";
import { MainLayout } from "components/layouts";

const ClassroomPrep = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
        classes: { edges: classEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList, mediaSection, signUp },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
                image={hero.image.childImageSharp.fluid}
            />
            <TileBlockSection title={`services`} items={servicesList} />
            <MediaSection
                image={mediaSection.image.childImageSharp.fluid}
                subtitle={mediaSection.subtitle}
                headingText={mediaSection.title}
                description={mediaSection.description}
                linkText={mediaSection.linkText}
                linkHref={mediaSection.linkHref}
                ribbon={true}
            />
            <ClassCardContainer title={`classes`} items={classEdges} />
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

export default ClassroomPrep;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Classroom Prep" } } }) {
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
                            body
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
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
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
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
        classes: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/classes/" }, frontmatter: { tag: { ne: "SAT" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        time
                        price
                        tag
                        teacherName
                        teacherLink
                    }
                    html
                }
            }
        }
        testimonies: allMarkdownRemark(filter: { frontmatter: { featured: { eq: "Classroom Prep" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
