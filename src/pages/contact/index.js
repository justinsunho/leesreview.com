import React from "react";
import { graphql } from "gatsby";
import { MediaHero, TileContainer } from "components/organisms";
import { MainLayout } from "components/layouts";
import * as styles from "./styles.module.scss";

const Contact = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { business, hero },
        },
    } = edges[0];

    return (
        <MainLayout>
            <MediaHero description={hero.description} headingText={hero.title} ribbon>
                <div className={styles.iframeContainer} dangerouslySetInnerHTML={{ __html: hero.form.code }} />
            </MediaHero>
            <TileContainer items={business.businessInfoList} title={business.title} />
        </MainLayout>
    );
};

export default Contact;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Contact" } } }) {
            edges {
                node {
                    frontmatter {
                        hero {
                            title
                            description
                            form {
                                code
                            }
                        }
                        business {
                            title
                            businessInfoList {
                                title
                                description
                            }
                        }
                    }
                }
            }
        }
    }
`;
