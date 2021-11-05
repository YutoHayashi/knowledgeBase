import { graphql } from 'gatsby';
import { CategoriesQuery } from '@/../types/graphql-types';
import React from 'react';
import { Seo } from '@components/Seo';
import { Base } from '@layouts/Base';
import { PostItem } from '@/components/molecules/PostItem';
type Props = {
    data: CategoriesQuery;
};
const Categories: React.FC<Props> = ( { data } ) => {
    const posts = data.posts.nodes;
    return (
        <>
            <Seo title={ posts[ 0 ].frontmatter?.title || '' } />
            <Base mv='notfull'>
                <h2>Categories: { posts[ 0 ].frontmatter?.category }</h2>
                { posts.map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Categories ( $slug: String ) {
        posts: allMarkdownRemark(
            limit: 5
            sort: { fields: [ frontmatter___date ], order: DESC }
            filter: { frontmatter: { category: { eq: $slug } } }
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
export default Categories;
