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
exports.createPages = ( { graphql, actions } ) => {
  const { createPage } = actions;
  return graphql( `
    {
      posts: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
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
  ` ).then( result => {
    if ( result.errors ) Promise.reject( result.errors );
    const posts = result.data.posts.edges;
    const categories = result.data.categories.distinct;
    const tags = result.data.tags.distinct;
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
      createPage( {
        path: `categories/${ cat }`,
        component: path.resolve( `./src/templates/Categories.tsx` ),
        context: {
          slug: cat,
        },
      } );
    } );
    tags.forEach( tag => {
      createPage( {
        path: `tags/${ tag }`,
        component: path.resolve( `./src/templates/Tags.tsx` ),
        context: {
          slug: tag,
        },
      } );
    } );
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
