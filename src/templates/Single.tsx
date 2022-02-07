import React from 'react';
import { graphql, Link } from 'gatsby';
import { SingleQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@/components/utils/Seo';
import '@/styles/single.scss';
type Props = {
    data: SingleQuery;
};
const Single: React.FC<Props> = ( { data } ) => {
    const post = data.post;
    return (
        <>
            <Seo title={ post?.frontmatter?.title || '' } />
            <Base>
                { {
                    mv: (
                        <section className='py-36 max-w-inner mx-auto'>
                            <Link to={ `/categories/${ post?.frontmatter?.category }` } className='block bg-primary py-1 px-5 rounded text-white tracking-wider whitespace-nowrap w-min mb-6'>{ post?.frontmatter?.category }</Link>
                            <small className='inline-block w-full font-bold text-12'>{ post?.frontmatter?.date }</small>
                            <h2 className='font-bold text-primary text-5xl tracking-wider mb-10'>{ post?.frontmatter?.title }</h2>
                            { post?.frontmatter?.tags?.map( ( tag, i ) => (
                                <Link to={ `/tags/${ tag }` } key={ i } className='inline-block text-blue-500 hover:text-blue-400 font-bold mb-6 px-3'>#{ tag }</Link>
                            ) ) }
                        </section>
                    ),
                    main: (
                        <div className='py-14 bg-secondary'>
                            <div className='max-w-inner mx-auto mb-12 w-full text-left'>
                                <div className='post-md'>
                                    <div dangerouslySetInnerHTML={ { __html: post?.html || '' } } />
                                </div>
                            </div>
                        </div>
                    ),
                } }
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Single ( $slug: String ) {
        post: markdownRemark( fields: { slug: { eq: $slug } } ) {
            html
            htmlAst
            excerpt( format: PLAIN, pruneLength: 120 )
            frontmatter {
                title
                date( formatString: "MM DD, YYYY" )
                category
                tags
            }
            fields {
                slug
            }
        }
    }
`;
export default Single;
