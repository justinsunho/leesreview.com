import React from "react";
import { graphql } from "gatsby";
import { Hero, ClassCardContainer, MediaSection, TileContainer, BottomSection } from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const ClassroomPrep = ({ data }) => {
    const {
        classes: { edges: classEdges },
        page: { edges: pageEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero, mediaSection, servicesList, signUp },
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
            <TileContainer items={servicesList} title={`services`} />
            <MediaSection
                description={mediaSection.description}
                headingText={mediaSection.title}
                image={mediaSection.image.childImageSharp.gatsbyImageData}
                linkHref={mediaSection.linkHref}
                linkText={mediaSection.linkText}
                ribbon={true}
                subtitle={mediaSection.subtitle}
            />
            <ClassCardContainer
                backgroundClassName={styles.backgroundClassCardContainer}
                items={classEdges}
                title={`classes`}
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

export default ClassroomPrep;

export const pageQuery = graphql`
    {
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
                                    gatsbyImageData(layout: FULL_WIDTH)
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
                                    gatsbyImageData(layout: FULL_WIDTH)
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
