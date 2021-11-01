import React from 'react';
import { graphql, Link } from 'gatsby';
import { SingleQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
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
                <h1>Single page</h1>
                <h2>title: { post?.frontmatter?.title }</h2>
                <p>date: { post?.frontmatter?.date }</p>
                <p>slug: { post?.fields?.slug }</p>
                <p>excerpt: { post?.excerpt }</p>
                <p>tags:
                    { post?.frontmatter?.tags?.map( ( tag, i ) => (
                        <Link to={ `/tags/${ tag }` } key={ i } className='text-blue-500 hover:text-blue-400 font-bold'>{ tag }</Link>
                    ) ) }
                </p>
                <p>category:
                    <Link to={ `/categories/${ post?.frontmatter?.category }` } className='text-blue-500 hover:text-blue-400 font-bold'>{ post?.frontmatter?.category }</Link>
                </p>
                <div className='post-md'>
                    html:
                    <div dangerouslySetInnerHTML={ { __html: post?.html || '' } } />
                </div>
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
