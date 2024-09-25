import React from "react";
import { graphql } from "gatsby";
import {
    Hero,
    TileContainer,
    MediaSection,
    MethodsContainer,
    TestimonialSection,
    ScheduleSection,
    BottomSection
} from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const CollegeConsulting = ({ data }) => {
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
                brochure,
                servicesList,
                signUp,
                testimonials
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
                        <div
                            dangerouslySetInnerHTML={{
                                __html: brochure.iframe
                            }}
                        />
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
            <TestimonialSection
                linkHref={testimonials.linkHref}
                linkText={testimonials.linkText}
                subtitle={testimonials.subtitle}
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
                        testimonials {
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
        testimonials: allMarkdownRemark(
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
