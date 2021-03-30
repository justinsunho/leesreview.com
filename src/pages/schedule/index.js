import React from "react";
import { graphql } from "gatsby";
import { SmallCaps } from "components/atoms";
import { MediaHero, ClassCardContainer, ScheduleSection } from "components/organisms";
import { MainLayout } from "components/layouts";
import { list, listItem, scheduleList } from "./styles.module.scss";

const Schedule = ({ data }) => {
    const {
        classes: { edges: classEdges },
        page: { edges: pageEdges },
        schedules: { edges: scheduleEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero },
        },
    } = pageEdges[0];

    return (
        <MainLayout>
            <MediaHero
                description={hero.description}
                headingText={hero.title}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
            >
                <div className={list}>
                    <SmallCaps>Click to navigate to these schedules</SmallCaps>
                    <h3>Quick Navigation</h3>
                    <ul className={scheduleList}>
                        {scheduleEdges.map((edge) => (
                            <li className={listItem} key={edge.node.id}>
                                <a href={`#${edge.node.frontmatter.title}`}>{edge.node.frontmatter.title}</a>
                            </li>
                        ))}
                        <li className={listItem} key={"classes"}>
                            <a href={`#classroom-prep`}>Classroom Prep</a>
                        </li>
                    </ul>
                </div>
            </MediaHero>
            {scheduleEdges.map((edge) => (
                <ScheduleSection
                    description={edge.node.frontmatter.description}
                    key={edge.node.id}
                    linkHref={edge.node.frontmatter.linkHref}
                    linkText={edge.node.frontmatter.linkText}
                    subtitle={edge.node.frontmatter.subtitle}
                    table={edge.node.html}
                    title={edge.node.frontmatter.title}
                />
            ))}
            <ClassCardContainer id="classroom-prep" items={classEdges} title={`classes`} />
        </MainLayout>
    );
};

export default Schedule;

export const pageQuery = graphql`
    {
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
                                    gatsbyImageData(layout: FULL_WIDTH)
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
                    id
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
