import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
import { Markdown } from '@/types';
const Index: React.FC<{  }> = ( {  } ) => {
    const mds = useStaticQuery( graphql`
        query {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        id
                        excerpt
                        fields {
                          slug
                        }
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
    return (
        <>
            <Seo title='Top' />
            <Base>
                <h1 className='text-red-500' >Alta KnowledgeBase</h1>
                { mds.allMarkdownRemark.edges.map( ( md: { node: Markdown } ) => (
                    <Link to={ md.node.fields.slug } key={ md.node.id }>
                        <h2>{ md.node.frontmatter.title }</h2>
                        <div dangerouslySetInnerHTML={ { __html: md.node.excerpt } } />
                    </Link>
                ) ) }
            </Base>
        </>
    );
};
export default Index;
