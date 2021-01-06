import React from "react";
import { graphql } from "gatsby";
import { Card } from "components/molecules";
import { Hero } from "components/organisms";
import { MainLayout } from "components/layouts";

const Index = ({ data }) => {
    const {
        allPagesJson: { edges },
    } = data;

    const {
        node: { hero, classes },
    } = edges[0];

    return (
        <MainLayout>
            <Hero
                className={"section"}
                headingText={hero.title}
                description={hero.description}
                linkText={hero.buttonText}
                linkHref={hero.buttonLink}
                image={"/images/pages/dsc02671.jpg"}
                button
            />
            <div className="container">
                <h2 className={"row"}>{classes.title}</h2>
                <div className={"row"}>
                    {classes.classList.map((item) => (
                        <Card
                            title={item.title}
                            image={item.image}
                            icon={item.icon}
                            description={item.description}
                            linkText={item.linkText}
                            linkHref={item.linkHref}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allPagesJson(filter: { title: { eq: "Home" } }) {
            edges {
                node {
                    title
                    id
                    hero {
                        title
                        description
                        buttonText
                        buttonLink
                        image
                    }
                    classes {
                        title
                        linkText
                        linkHref
                        classList {
                            title
                            description
                            linkText
                            linkHref
                            image
                        }
                    }
                }
            }
        }
    }
`;
