import React from "react";
import { graphql } from "gatsby";
import { Hero, MediaSelectSection, MediaSection, LinkCardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const About = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { hero, reason, students, staff },
        },
    } = edges[0];

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                button
                image={hero.image.childImageSharp.gatsbyImageData}
            />
            <MediaSelectSection title={reason.title} items={reason.reasonsList} />
            <MediaSection
                image={students.image.childImageSharp.gatsbyImageData}
                subtitle={students.subtitle}
                headingText={students.title}
                description={students.description}
                linkText={students.linkText}
                linkHref={students.linkHref}
                ribbon
            />
            <LinkCardContainer title={staff.title} items={staff.staffList} />
        </MainLayout>
    );
};

export default About;

export const pageQuery = graphql`
    {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "About Us" } } }) {
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
