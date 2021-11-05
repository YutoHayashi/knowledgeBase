import React from 'react';
import { graphql, Link } from 'gatsby';
import { IndexQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
import { PostItem } from '@components/molecules/PostItem';
type Props = {
    data: IndexQuery;
}
const Index: React.FC<Props> = ( { data } ) => {
    const posts = data.posts;
    return (
        <>
            <Seo title='Top' />
            <Base mv='full'>
                <h2>posts</h2>
                { posts.edges.map( md => md.node ).map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
            </Base>
        </>
    );
};
export const pageQuery = graphql`
    query Index {
        posts: allMarkdownRemark {
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
                    }
                    html
                }
            }
        }
    }
`;
export default Index;
