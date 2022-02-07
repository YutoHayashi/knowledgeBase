import { graphql } from 'gatsby';
import { CategoriesQuery } from '@/../types/graphql-types';
import React from 'react';
import { Seo } from '@/components/utils/Seo';
import { Base } from '@layouts/Base';
import { PostItem } from '@/components/molecules/PostItem';
type Props = {
    data: CategoriesQuery;
    pageContext: {
        slug: string;
    }
};
const Categories: React.FC<Props> = ( { data, pageContext } ) => {
    const posts = data.posts.nodes;
    const category = pageContext.slug;
    return (
        <>
            <Seo title={ category || '' } />
            <Base>{ {
                mv: (
                    <section className='py-36 max-w-inner mx-auto'>
                        <h2 className='uppercase font-bold text-primary text-5xl tracking-wider mb-10'>{ category }</h2>
                    </section>
                ),
                main: (
                    <div className='py-14 bg-secondary'>
                        <div className='max-w-inner mx-auto grid grid-cols-3 gap-y-3 mb-12 w-full text-left'>
                            { posts.map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
                        </div>
                    </div>
                ),
            } }</Base>
        </>
    );
};
export const pageQuery = graphql`
    query Categories( $slug: String, $limit: Int!, $skip: Int! ) {
        posts: allMarkdownRemark(
            filter: { frontmatter: { category: { eq: $slug } } }
            limit: $limit
            skip: $skip
            sort: { fields: [ frontmatter___date ], order: DESC }
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
