import React from "react";
import { graphql } from "gatsby";
import { Hero, MediaSelectSection, MediaSection, CardContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const About = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { hero, reason, students, staff, history },
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
                image={hero.image.childImageSharp.fluid}
            />
            <MediaSelectSection title={reason.title} items={reason.reasonsList} />
            <MediaSection
                image={students.image.childImageSharp.fluid}
                subtitle={students.subtitle}
                headingText={students.title}
                description={students.description}
                linkText={students.linkText}
                linkHref={students.linkHref}
                ribbon
            />
            <CardContainer title={staff.title} items={staff.staffList} />
            <div>{history.title}</div>
        </MainLayout>
    );
};

export default About;

export const pageQuery = graphql`
    query {
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
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
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
                                        fluid {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                        students {
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
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
                                position
                                tags
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
                        history {
                            title
                        }
                    }
                }
            }
        }
    }
`;
