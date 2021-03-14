import React from "react";
import { graphql } from "gatsby";
import { Hero, ClassCardContainer, MediaSection, TileContainer, BottomSection } from "components/organisms";
import { MainLayout } from "components/layouts";
import { backgroundClassCardContainer } from "./styles.module.scss";

const ClassroomPrep = ({ data }) => {
    const {
        page: { edges: pageEdges },
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
            <TileContainer title={`services`} items={servicesList} />
            <MediaSection
                image={mediaSection.image.childImageSharp.fluid}
                subtitle={mediaSection.subtitle}
                headingText={mediaSection.title}
                description={mediaSection.description}
                linkText={mediaSection.linkText}
                linkHref={mediaSection.linkHref}
                ribbon={true}
            />
            <ClassCardContainer
                title={`classes`}
                backgroundClassName={backgroundClassCardContainer}
                items={classEdges}
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
                    id
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
    }
`;
