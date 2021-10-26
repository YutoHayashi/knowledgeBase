import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostAllQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
type Props = {
    data: PostAllQuery;
}
const Index: React.FC<Props> = ( { data } ) => {
    return (
        <>
            <Seo title='Top' />
            <Base>
                <h1 className='text-red-500' >Alta KnowledgeBase</h1>
                { data.allMarkdownRemark.edges.map( md => (
                    <Link to={ md.node.fields?.slug || '' } key={ md.node.id }>
                        <h2>{ md.node.frontmatter?.title }</h2>
                        <div dangerouslySetInnerHTML={ { __html: md.node.excerpt || '' } } />
                    </Link>
                ) ) }
            </Base>
        </>
    );
};
export const pageQuery = graphql`
    query PostAll {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    excerpt( format: PLAIN, pruneLength: 120 )
                    fields {
                    slug
                    }
                    frontmatter {
                        title
                        date( formatString: "MM DD, YYYY" )
                    }
                    html
                }
            }
        }
    }
`;
export default Index;
