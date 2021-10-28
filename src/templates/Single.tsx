import React from 'react';
import { graphql, Link } from 'gatsby';
import { SingleQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@components/Seo';
type Props = {
    data: SingleQuery;
};
const Single: React.FC<Props> = ( { data } ) => {
    return (
        <>
            <Seo title={ data.markdownRemark?.frontmatter?.title || '' } />
            <Base>
                <h1>Single page</h1>
                <h2>title: { data.markdownRemark?.frontmatter?.title }</h2>
                <p>date: { data.markdownRemark?.frontmatter?.date }</p>
                <p>slug: { data.markdownRemark?.fields?.slug }</p>
                <p>excerpt: { data.markdownRemark?.excerpt }</p>
                <p>tags:
                    { data.markdownRemark?.frontmatter?.tags?.map( ( tag, i ) => (
                        <Link to={ `/tags/${ tag }` } key={ i } className='text-blue-500 hover:text-blue-400 font-bold'>{ tag }</Link>
                    ) ) }
                </p>
                <p>category:
                    <Link to={ `/categories/${ data.markdownRemark?.frontmatter?.categoryslug }` } className='text-blue-500 hover:text-blue-400 font-bold'>{ data.markdownRemark?.frontmatter?.category }</Link>
                </p>
                <div>
                    html:
                    <div dangerouslySetInnerHTML={ { __html: data.markdownRemark?.html || '' } } />
                </div>
            </Base>
        </>
    );
}
export const pageQuery = graphql`
    query Single ( $slug: String ) {
        markdownRemark( fields: { slug: { eq: $slug } } ) {
            html
            htmlAst
            excerpt( format: PLAIN, pruneLength: 120 )
            frontmatter {
                title
                date( formatString: "MM DD, YYYY" )
                category
                categoryslug
                tags
            }
            fields {
                slug
            }
        }
    }
`;
export default Single;
