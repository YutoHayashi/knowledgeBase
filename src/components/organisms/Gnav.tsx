import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GnavQuery } from '@/../types/graphql-types';
import { Gnav as MoleculesGnav } from '../molecules/Gnav';
type Props = {};
export const Gnav: React.VFC<Props> = ( {  } ) => {
    const gnavdata: GnavQuery = useStaticQuery( graphql`
        query Gnav {
            cats: allMarkdownRemark {
                distinct( field: frontmatter___category )
            }
            tags: allMarkdownRemark {
                distinct( field: frontmatter___tags )
            }
        }
    ` );
    return (
        <div className='bg-primary text-white w-full'>
            <nav className='max-w-inner mx-auto'>
                <MoleculesGnav { ...{
                    items: [
                        { title: 'カテゴリ', to: '/categories', children: gnavdata.cats.distinct.map( cat => ( { title: cat, to: `/categories/${ cat }` } ) ), },
                        { title: 'タグ', to: '/tags', children: gnavdata.tags.distinct.map( tag => ( { title: tag, to: `/tags/${ tag }`, } ) ), },
                    ],
                } } />
            </nav>
        </div>
    );
};
