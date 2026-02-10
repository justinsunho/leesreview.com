import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    MediaSelectSection,
    MediaSection,
    LinkCardContainer
} from "components/organisms";
import { MainLayout } from "components/layouts";

const About = ({ data }) => {
    const {
        allMarkdownRemark: { edges }
    } = data;

    const {
        node: {
            frontmatter: { hero, reason, staff, students }
        }
    } = edges[0];

    return (
        <MainLayout>
            <Hero
                button
                description={hero.description}
                headingText={hero.title}
                image={hero.image?.childImageSharp.gatsbyImageData}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
                subtitle={hero.subtitle}
            />
            <MediaSelectSection
                items={reason.reasonsList}
                title={reason.title}
            />
            <MediaSection
                description={students.description}
                headingText={students.title}
                image={students.image?.childImageSharp.gatsbyImageData}
                linkHref={students.linkHref}
                linkText={students.linkText}
                ribbon
                subtitle={students.subtitle}
            />
            {/* <LinkCardContainer items={staff.staffList} title={staff.title} /> */}
        </MainLayout>
    );
};

export default About;

export const pageQuery = graphql`
    {
        allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "About Us" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                            subtitle
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        reason {
                            title
                            reasonsList {
                                title
                                description
                                image {
                                    childImageSharp {
                                        gatsbyImageData(layout: FULL_WIDTH)
                                    }
                                }
                            }
                        }
                        students {
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                            title
                            description
                            subtitle
                            linkText
                            linkHref
                        }
                        staff {
                            title
                            staffList {
                                title
                                subtitle
                                tags
                                description
                                linkText
                                linkHref
                                image {
                                    childImageSharp {
                                        gatsbyImageData(layout: FULL_WIDTH)
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
