module.exports = {
    siteMetadata: {
        title: `Lees Review`,
        author: `Justin Sunho Kim`,
        description: `Lees Review Tutoring Center`,
        siteUrl: `https://leesreview.com`,
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        `gatsby-plugin-resolve-src`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/staff`,
                name: `staff`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/testimonies`,
                name: `testimonies`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: "assets",
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                    },
                ],
            },
        },
    ],
};
