module.exports = {
    siteMetadata: {
        title: `Lees Review`,
        author: `Justin Sunho Kim`,
        description: `Lees Review Tutoring Center`,
        siteUrl: `http://localhost:8000`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: `images`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/schedules`,
                name: `schedules`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/classes`,
                name: `classes`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/pages`,
                name: `pages`,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: "images",
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                    },
                ],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        `gatsby-plugin-resolve-src`,
        "gatsby-transformer-json",
    ],
};
