import { graphql } from 'gatsby';
import { TagsQuery } from '@/../types/graphql-types';
import React from 'react';
import { Seo } from '@/components/utils/Seo';
import { Base } from '@layouts/Base';
import { PostItem } from '@components/molecules/PostItem';
type Props = {
    data: TagsQuery;
};
const Tags: React.FC<Props> = ( { data } ) => {
    const posts = data.posts.nodes;
    return (
        <>
            <Seo title={ posts[ 0 ].frontmatter?.title || '' } />
            <Base>
                { posts.map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Tags ( $slug: [String] ) {
        posts: allMarkdownRemark(
            limit: 5
            sort: { fields: [ frontmatter___date ], order: DESC }
            filter: { frontmatter: { tags: { in: $slug } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date( formatString: "MM DD, YYYY" )
                    category
                    tags
                }
                excerpt( format: PLAIN, pruneLength: 120 )
                fields {
                    slug
                }
            }
        }
    }
`;
export default Tags;
