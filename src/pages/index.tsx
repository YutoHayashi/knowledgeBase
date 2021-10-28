import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostAllQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
import { PostItem } from '@components/molecules/PostItem';
type Props = {
    data: PostAllQuery;
}
const Index: React.FC<Props> = ( { data } ) => {
    return (
        <>
            <Seo title='Top' />
            <Base>
                <h1 className='text-red-500 text-lg font-bold' >Alta KnowledgeBase</h1>
                <ul>
                    <li><Link to='/' className='text-blue-500 hover:text-blue-400 font-bold'>Top</Link></li>
                    <li><Link to='/guideline' className='text-blue-500 hover:text-blue-400 font-bold'>guideline</Link></li>
                    <li><Link to='/sitemap' className='text-blue-500 hover:text-blue-400 font-bold'>sitemap</Link></li>
                    <li><Link to='/usage' className='text-blue-500 hover:text-blue-400 font-bold'>usage</Link></li>
                </ul>
                <h2>posts</h2>
                { data.allMarkdownRemark.edges.map( md => md.node ).map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
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
                        category
                        categoryslug
                    }
                    html
                }
            }
        }
    }
`;
export default Index;
