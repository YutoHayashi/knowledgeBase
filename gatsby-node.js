const path = require( 'path' );
const { createFilePath } = require( `gatsby-source-filesystem` );
exports.onCreateNode = ( { node, getNode, actions } ) => {
    const { createNodeField } = actions;
    if ( node.internal.type === 'MarkdownRemark' ) {
        const sulg = createFilePath( { node, getNode } );
        createNodeField( {
            node,
            name: 'slug',
            value: sulg,
        } );
    }
};
exports.createPages = async ( { graphql, actions } ) => {
    const { createPage } = actions;
    const perPage = parseInt( process.env.PER_PAGE || 10 );
    const sources = await graphql(`#graphql
        {
            posts: allMarkdownRemark {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            category
                            tags
                        }
                    }
                }
            }
            categories: allMarkdownRemark {
                distinct( field: frontmatter___category )
            }
            tags: allMarkdownRemark {
                distinct( field: frontmatter___tags )
            }
        }
    `);
    if ( sources.errors ) Promise.reject( sources.errors );
    const posts = sources.data.posts.edges;
    const categories = sources.data.categories.distinct;
    const tags = sources.data.tags.distinct;
    posts.forEach( ( { node } ) => {
        createPage( {
            path: node.fields.slug,
            component: path.resolve( `./src/templates/Single.tsx` ),
            context: {
                slug: node.fields.slug,
            },
        } );
    } );
    categories.forEach( cat => {
        const totalCount = posts.filter( ( { node } ) => node.frontmatter.category === cat ).length;
        const pageCount = Math.ceil( totalCount / perPage );
        for( let i = 0; i < pageCount; i ++ ) {
            createPage( {
                path: `/categories/${ cat }/${ i + 1 }/`,
                component: path.resolve( `./src/templates/Categories.tsx` ),
                context: {
                    slug: cat,
                    limit: perPage,
                    skip: i * perPage,
                },
            } );
        }
        if ( pageCount >= 1 ) {
            createPage( {
                path: `/categories/${ cat }/`,
                component: path.resolve( `./src/templates/RedirectToPage1.tsx` ),
            } );
        }
    } );
    tags.forEach( tag => {
        const totalCount = posts.filter( ( { node } ) => node.frontmatter.tags.includes( tag ) ).length;
        const pageCount = Math.ceil( totalCount / perPage );
        for( let i = 0; i < pageCount; i ++ ) {
            createPage( {
                path: `/tags/${ tag }/${ i + 1 }/`,
                component: path.resolve( `./src/templates/Tags.tsx` ),
                context: {
                    slug: tag,
                    limit: perPage,
                    skip: i + perPage,
                },
            } );
        }
        if ( pageCount >= 1 ) {
            createPage( {
                path: `/tags/${ tag }/`,
                component: path.resolve( `./src/templates/RedirectToPage1.tsx` ),
            } );
        }
    } );
}
exports.onCreateWebpackConfig = ( { actions } ) => {
    actions.setWebpackConfig( {
        resolve: {
            alias: {
                "@": path.resolve( __dirname, `./src` ),
                "@components": path.resolve( __dirname, `./src/components` ),
                "@layouts": path.resolve( __dirname, `./src/layouts` ),
            },
        },
    } );
};
