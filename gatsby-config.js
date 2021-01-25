module.exports = {
    siteMetadata: {
        title: `Lees Review`,
        author: `Justin Sunho Kim`,
        description: `Lees Review Tutoring Center`,
        siteUrl: `http://localhost:8000`,
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        "gatsby-transformer-sharp",
        `gatsby-plugin-resolve-src`,
        "gatsby-transformer-json",
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
    ],
};
