import React from "react";
import { graphql } from "gatsby";
import { CTALink, SmallCaps } from "components/atoms";
import { Card } from "components/molecules";
import { Hero, MediaSection, TestimonySection } from "components/organisms";
import { MainLayout } from "components/layouts";
import utilities from "theme/utilities.module.scss";

const Index = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { hero, classes, about, testimonies, location },
        },
    } = edges[0];

    return (
        <MainLayout>
            <div className={`section`}>
                <Hero
                    headingText={hero.title}
                    description={hero.description}
                    linkText={hero.buttonText}
                    linkHref={hero.buttonLink}
                    image={hero.image.childImageSharp.fluid}
                    button
                />
            </div>
            <div className={`section`}>
                <div className={"row"}>
                    <h2 className={`col ${utilities.textCenter}`}>{classes.title}</h2>
                </div>
                <div className={"row"}>
                    {classes.classList.map((item) => (
                        <div className={"col-md-3"}>
                            <Card
                                title={item.title}
                                image={item.image.childImageSharp.fluid}
                                icon={item.icon.code}
                                description={item.description}
                                linkText={item.linkText}
                                linkHref={item.linkHref}
                            />
                        </div>
                    ))}
                </div>
                <div className={"row"}>
                    <CTALink linkHref={classes.linkHref} className={`${utilities.textCenter} col`}>
                        {classes.linkText}
                    </CTALink>
                </div>
            </div>
            <div className={`section`}>
                <MediaSection
                    image={about.image.childImageSharp.fluid}
                    subtitle={about.subtitle}
                    headingText={about.title}
                    description={about.description}
                    linkText={about.linkText}
                    linkHref={about.linkHref}
                />
            </div>
            <div className={`section`}>
                <TestimonySection
                    subtitle={testimonies.subtitle}
                    linkHref={testimonies.linkHref}
                    linkText={testimonies.linkText}
                    testimonyList={testimonies.testimonyList}
                />
            </div>
            <div className={`section`}>
                <div className={`row`}>
                    <div className={`col ${utilities.textCenter}`}>
                        <SmallCaps>{location.subtitle}</SmallCaps>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col ${utilities.textCenter}`}>
                        <h2>{location.title}</h2>
                    </div>
                </div>
                <div className={`row`}>
                    {location.locationList.map((item) => (
                        <div className={`col-md-6`}>
                            <Card
                                title={item.title}
                                className={``}
                                image={item.image.childImageSharp.fluid}
                                description={item.description}
                                linkText={item.linkText}
                                linkHref={item.linkHref}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
            edges {
                node {
                    frontmatter {
                        hero {
                            title
                            description
                            buttonText
                            buttonLink
                            staff
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        classes {
                            title
                            linkText
                            linkHref
                            classList {
                                title
                                image {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                icon {
                                    code
                                }
                                description
                                linkText
                                linkHref
                            }
                        }
                        about {
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            subtitle
                            title
                            description
                            linkText
                            linkHref
                        }
                        testimonies {
                            subtitle
                            linkText
                            linkHref
                            testimonyList {
                                title
                                description
                                quote
                                tags
                                image {
                                    childImageSharp {
                                        fluid(maxHeight: 240) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                icon {
                                    childImageSharp {
                                        fixed(height: 32) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        }
                        location {
                            subtitle
                            title
                            locationList {
                                title
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
                    }
                }
            }
        }
    }
`;
