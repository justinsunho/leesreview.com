import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    MediaSection,
    TileContainer,
    MethodsContainer,
    TestimonialSection,
    PriceCardContainer,
    BottomSection
} from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const SAT = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonials: { edges: testimonialList }
    } = data;

    const {
        node: {
            frontmatter: {
                hero,
                mediaSection,
                methodsList,
                priceList,
                servicesList,
                signUp
            }
        }
    } = pageEdges[0];

    return (
        <MainLayout className={styles.pageGradient}>
            <Hero
                description={hero.description}
                headingText={hero.title}
                image={hero.image?.childImageSharp.gatsbyImageData}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
                subtitle={hero.subtitle}
            />
            <TileContainer items={servicesList} title={`Our SAT Services`} />
            <MediaSection
                description={mediaSection.description}
                headingText={mediaSection.title}
                image={mediaSection.image?.childImageSharp.gatsbyImageData}
                linkHref={mediaSection.linkHref}
                linkText={mediaSection.linkText}
                ribbon={true}
                videoId={mediaSection.videoId}
                subtitle={mediaSection.subtitle}
            />
            <MethodsContainer
                backgroundClassName={styles.methodBackgroundClassName}
                items={methodsList}
                title={`Our Methods`}
            />
            <TestimonialSection
                linkHref={`/testimonials`}
                linkText={`See more stories`}
                subtitle={`SAT Stories`}
                testimonialList={testimonialList}
            />
            {/* <PriceCardContainer
                backgroundClassName={styles.priceCardBackgroundClassName}
                items={priceList}
                title={`Our Packages`}
            /> */}
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

export default SAT;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "SAT" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        hero {
                            title
                            subtitle
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
                            description
                            videoId
                            icon {
                                code
                            }
                        }
                        mediaSection {
                            subtitle
                            title
                            description
                            linkText
                            linkHref
                            videoId
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        methodsList {
                            title
                            description
                            image {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH)
                                }
                            }
                        }
                        priceList {
                            title
                            description
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
        testimonials: allMarkdownRemark(
            filter: { frontmatter: { featured: { eq: "SAT" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        videoId
                        college
                        tags
                        image {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
