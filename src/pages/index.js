import React from "react";
import { graphql } from "gatsby";
import {
  HomeHeroSection,
  MediaSection,
  TestimonySection,
  LinkCardContainer,
  TileContainer
} from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const Index = ({ data }) => {
  const {
    page: { edges: pageEdges },
    testimonies: { edges: testimonyList }
  } = data;

  const {
    node: {
      frontmatter: { about, classes, hero, location, testimonies, business }
    }
  } = pageEdges[0];

  return (
    <MainLayout bannerDarkMode className={styles.pageGradient}>
      <HomeHeroSection
        bigButton
        button
        description={hero.description}
        headingText={hero.title}
        image={hero.image.childImageSharp.gatsbyImageData}
        linkHref={hero.buttonLink}
        linkText={hero.buttonText}
      />
      <TileContainer items={business.businessInfoList} title={business.title} />
      <LinkCardContainer
        backgroundClassName={styles.linkCardBackground}
        items={classes.classList}
        title={classes.title}
      />
      <MediaSection
        description={about.description}
        headingText={about.title}
        image={about.image.childImageSharp.gatsbyImageData}
        linkHref={about.linkHref}
        linkText={about.linkText}
        ribbon={true}
        subtitle={about.subtitle}
        videoId={about.videoId}
      />
      <TestimonySection
        linkHref={testimonies.linkHref}
        linkText={testimonies.linkText}
        subtitle={testimonies.subtitle}
        testimonyList={testimonyList}
      />
      <LinkCardContainer
        items={location.locationList}
        subtitle={location.subtitle}
        title={location.title}
      />
    </MainLayout>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    page: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Home" } } }
    ) {
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
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            business {
              title
              businessInfoList {
                title
                description
                map {
                  code
                }
                image {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
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
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
                description
                linkText
                linkHref
              }
            }
            about {
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              videoId
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
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
          }
        }
      }
    }
    testimonies: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: "Home" } } }
    ) {
      edges {
        node {
          id
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
