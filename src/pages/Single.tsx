import React from 'react';
import { graphql } from 'gatsby';
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
            }
            fields {
                slug
            }
        }
    }
`;
export default Single;
