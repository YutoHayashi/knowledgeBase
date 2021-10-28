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
    const nodes = data.allMarkdownRemark.nodes;
    return (
        <>
            <Seo title={ nodes[ 0 ].frontmatter?.title || '' } />
            <Base>
                <h2>Categories: { nodes[ 0 ].frontmatter?.category }</h2>
                { nodes.map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Categories ( $slug: String ) {
        allMarkdownRemark(
            limit: 5
            sort: { fields: [ frontmatter___date ], order: DESC }
            filter: { frontmatter: { categoryslug: { eq: $slug } } }
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
export default Categories;
