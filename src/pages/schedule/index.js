import React from "react";
import { graphql } from "gatsby";
import { MediaHero, ClassCardContainer, ScheduleSection } from "components/organisms";
import { MainLayout } from "components/layouts";

const Schedule = ({ data }) => {
    const {
        page: { edges: pageEdges },
        schedules: { edges: scheduleEdges },
        classes: { edges: classEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <MediaHero
                headingText={hero.title}
                description={hero.description}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
            >
                <ul>
                    {scheduleEdges.map((edge) => (
                        <li>
                            <a href={`${edge.node.frontmatter.title}`}>{edge.node.frontmatter.title}</a>
                        </li>
                    ))}
                </ul>
            </MediaHero>
            <ClassCardContainer title={`classes`} items={classEdges} />
            {scheduleEdges.map((edge) => (
                <ScheduleSection
                    title={edge.node.frontmatter.title}
                    subtitle={edge.node.frontmatter.subtitle}
                    description={edge.node.frontmatter.description}
                    linkText={edge.node.frontmatter.linkText}
                    linkHref={edge.node.frontmatter.linkHref}
                    table={edge.node.html}
                />
            ))}
        </MainLayout>
    );
};

export default Schedule;

export const pageQuery = graphql`
    query {
        page: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Schedule" } } }) {
            edges {
                node {
                    frontmatter {
                        title
                        hero {
                            title
                            description
                            buttonLink
                            buttonText
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
        schedules: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/schedules/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        description
                        linkText
                        linkHref
                    }
                    html
                }
            }
        }
        classes: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/classes/" } }) {
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
