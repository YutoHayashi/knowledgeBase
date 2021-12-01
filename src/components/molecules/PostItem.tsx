import React from 'react';
import { graphql, Link } from 'gatsby';
import { MarkdownRemark } from '@/../types/graphql-types';
type Props = {
    node: Partial<MarkdownRemark>;
};
export const PostItem: React.FC<Props> = ( { node } ) => {
    return (
        <div className='px-1 box-border w-full h-full'>
            <Link to={ node.fields?.slug || '' } className='w-full h-full border-2 border-primary text-primary p-3 rounded-lg bg-white shadow-md flex flex-col justify-start'>
                <span className='bg-primary py-1 px-3 rounded text-white text-xs tracking-wider whitespace-nowrap w-min'>{ node.frontmatter?.category }</span>
                <h2 className='mt-2 mb-8 text-lg font-bold tracking-wide'>{ node.frontmatter?.title }</h2>
                <div dangerouslySetInnerHTML={ { __html: node.excerpt || '' } } className='mb-5' />
                <small className='font-bold mt-auto'>{ node.frontmatter?.date }</small>
                <small className='font-bold'>投稿者:<span>{ node.frontmatter?.author }</span></small>
            </Link>
        </div>
    );
}
