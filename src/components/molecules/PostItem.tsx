import React from 'react';
import { graphql, Link } from 'gatsby';
import { MarkdownRemark } from '@/../types/graphql-types';
type Props = {
    node: Partial<MarkdownRemark>;
    className?: string;
};
export const PostItem: React.FC<Props> = ( { node, className } ) => {
    return (
        <Link to={ node.fields?.slug || '' } className={ `shadow p-5 block bg-gray-100 my-2 text-blue-500 hover:text-blue-400 ${ className }` }>
            <h2>{ node.frontmatter?.title }</h2>
            <div dangerouslySetInnerHTML={ { __html: node.excerpt || '' } } />
        </Link>
    );
};
