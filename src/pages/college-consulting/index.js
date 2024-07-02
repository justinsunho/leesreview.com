import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    TileContainer,
    MediaSection,
    MethodsContainer,
    TestimonySection,
    ScheduleSection,
    BottomSection
} from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const CollegeConsulting = ({ data }) => {
    const {
        page: { edges: pageEdges },
        testimonies: { edges: testimonyList }
    } = data;

    const {
        node: {
            frontmatter: {
                hero,
                mediaSection,
                methodsList,
                priceList,
                brochure,
                servicesList,
                signUp,
                testimonies
            }
        }
    } = pageEdges[0];

    return (
        <MainLayout>
            <Hero
                description={hero.description}
                headingText={hero.title}
                image={hero.image.childImageSharp.gatsbyImageData}
                linkHref={hero.buttonLink}
                linkText={hero.buttonText}
                subtitle={hero.subtitle}
            />
            <ScheduleSection
                description={
                    <>
                        {brochure.description}
                        {/* {brochure.iframe} */}
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQGRr6eJPVt1DpJft-BnCh2XDqomi3C1MjhxYLlOTiZ5lf2TwZF4SbR9DquCRZeymgzh7Ka5XBIrwSP/embed?start=false&amp;loop=false&amp;delayms=5000"
                            frameborder="0"
                            width="960"
                            height="569"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </>
                }
                linkHref={brochure.buttonLink}
                linkText={brochure.buttonText}
                title={brochure.title}
            />
            <TileContainer
                items={servicesList}
                title={`Our College Consulting`}
            />
            <MediaSection
                description={mediaSection.description}
                headingText={mediaSection.title}
                image={mediaSection.image.childImageSharp.gatsbyImageData}
                linkHref={mediaSection.linkHref}
                linkText={mediaSection.linkText}
                ribbon={true}
                subtitle={mediaSection.subtitle}
                videoId={mediaSection.videoId}
            />

            <MethodsContainer
                backgroundClassName={styles.methodBackgroundClassName}
                items={methodsList}
                title={`Our Methods`}
            />
            <TestimonySection
                linkHref={testimonies.linkHref}
                linkText={testimonies.linkText}
                subtitle={testimonies.subtitle}
                testimonyList={testimonyList}
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

export default CollegeConsulting;

export const pageQuery = graphql`
    {
        page: allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "College Consulting" } } }
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
                        brochure {
                            title
                            description
                            buttonText
                            buttonLink
                            iframe
                        }
                        servicesList {
                            title
                            description
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
                        testimonies {
                            subtitle
                            linkText
                            linkHref
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
        testimonies: allMarkdownRemark(
            filter: { frontmatter: { featured: { eq: "College Consulting" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        college
                        tags
                        videoId
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
