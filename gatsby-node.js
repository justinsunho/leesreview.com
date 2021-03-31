const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ actions, getNode, node }) => {
    fmImagesToRelative(node);
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: `staff` + slug,
        });
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const staff = await graphql(`
        query {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(staff)/" } }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    staff.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/templates/Staff/index.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        });
    });
};
