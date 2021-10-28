import { graphql } from 'gatsby';
import { TagsQuery } from '@/../types/graphql-types';
import React from 'react';
import { Seo } from '@components/Seo';
import { Base } from '@layouts/Base';
import { PostItem } from '@components/molecules/PostItem';
type Props = {
    data: TagsQuery;
};
const Tags: React.FC<Props> = ( { data } ) => {
    const nodes = data.allMarkdownRemark.nodes;
    return (
        <>
            <Seo title={ nodes[ 0 ].frontmatter?.title || '' } />
            <Base>
                { nodes.map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Tags ( $slug: [String] ) {
        allMarkdownRemark(
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
                    categoryslug
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
