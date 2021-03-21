import React from "react";
import { graphql } from "gatsby";
import { MediaHero, ClassCardContainer, ScheduleSection } from "components/organisms";
import { MainLayout } from "components/layouts";
import { list, listItem } from "./styles.module.scss";

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
                <div className={list}>
                    <h3>Available Schedules</h3>
                    <p>Click to navigate to these schedules</p>
                    <ul>
                        {scheduleEdges.map((edge) => (
                            <li className={listItem} key={edge.node.id}>
                                <a href={`#${edge.node.frontmatter.title}`}>
                                    {edge.node.frontmatter.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </MediaHero>
            <ClassCardContainer title={`classes`} items={classEdges} />
            {scheduleEdges.map((edge) => (
                <ScheduleSection
                    key={edge.node.id}
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

export const pageQuery = graphql`{
  page: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Schedule"}}}) {
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
  schedules: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content/schedules/"}}
  ) {
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
  classes: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content/classes/"}}
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
