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
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  ` ).then( result => {
    result.data.allMarkdownRemark.edges.forEach( ( { node } ) => {
      createPage( {
        path: node.fields.slug,
        component: path.resolve( `./src/pages/Single.tsx` ),
        context: {
          slug: node.fields.slug,
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
