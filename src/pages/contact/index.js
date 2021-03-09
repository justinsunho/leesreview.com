import React from "react";
import { graphql } from "gatsby";
import { MediaHero, TileContainer } from "components/organisms";
import { MainLayout } from "components/layouts";

const Contact = ({ data }) => {
    const {
        allMarkdownRemark: { edges },
    } = data;

    const {
        node: {
            frontmatter: { hero, business },
        },
    } = edges[0];

    return (
        <MainLayout>
            <MediaHero headingText={hero.title} description={hero.description} ribbon>
                <div dangerouslySetInnerHTML={{ __html: hero.form.code }} />
            </MediaHero>
            <TileContainer title={business.title} items={business.businessInfoList} />
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
