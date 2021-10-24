import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
type States = {  }
const Index: React.FC<{  }> = ( {  } ) => {
    const mds = useStaticQuery( graphql`
        query {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date( formatString: "DD MMMM, YYYY" )
                        }
                        html
                    }
                }
            }
        }
    ` );
    console.log( mds );
    return (
        <>
            <Seo title='Top' />
            <Base>
                <h1 className='text-red-500' >Alta KnowledgeBase</h1>
                { mds.allMarkdownRemark.edges.map( ( md: any ) => (
                    <div>
                        <h2>{ md.node.frontmatter.title }</h2>
                        <div dangerouslySetInnerHTML={ { __html: md.node.html } } />
                    </div>
                ) ) }
            </Base>
        </>
    );
};
export default Index;
