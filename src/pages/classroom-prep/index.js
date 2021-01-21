import React from "react";
import { graphql } from "gatsby";
import { Hero, CardContainer, TextBlockSection } from "components/organisms";
import { MainLayout } from "components/layouts";

const ClassroomPrep = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList },
        classes: { edges: classEdges },
    } = data;

    const {
        node: {
            frontmatter: { hero, servicesList },
        },
    } = pageEdges[0];

    const test = classEdges.map((classEdge) => {
        return { ...classEdge.node.frontmatter };
    });

    return (
        <MainLayout>
            <Hero
                headingText={hero.title}
                description={hero.description}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
                image={hero.image.childImageSharp.fluid}
            />
            <TextBlockSection title={`services`} items={servicesList} />
            <CardContainer title={`classes`} items={test} linkText={`all classes`} linkHref={"#"} />
            <div>Sign Up Now</div>
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
                    }
                }
            }
        }
        classes: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/classes/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        time
                        description
                        price
                        tag
                        teacherName
                        teacherLink
                    }
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
