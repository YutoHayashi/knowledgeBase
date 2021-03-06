require( 'dotenv' ).config( {
    path: `.env.${ process.env.NODE_ENV }`
} );
module.exports = {
    pathPrefix: `/knowledgeBase`,
    siteMetadata: {
        title: `アルタナレッジベース`,
        description: `Alta knowledge base.`,
        author: `YutoHayashi`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${ __dirname }/src/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-code-titles`,
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },
                ],
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `types/graphql-types.d.ts`,
            },
        },
        `gatsby-plugin-sass`,
    ],
}
