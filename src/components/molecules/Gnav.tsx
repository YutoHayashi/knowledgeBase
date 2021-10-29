import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GnavQuery } from '@/../types/graphql-types';
type Props = {};
export const Gnav: React.FC<Props> = ( { children, } ) => {
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
        <nav className='bg-gray-100 w-full'>
            <ul>
                <li><Link to='/' className='text-blue-500 hover:text-blue-400 font-bold'>Top</Link></li>
                <li>カテゴリページ:&nbsp;
                    { gnavdata.cats.distinct.map( ( cat, i ) => <React.Fragment key={ i }><Link to={ `/categories/${ cat }` } className='text-blue-500 hover:text-blue-400 font-bold'>{ cat }</Link><span>&nbsp;|&nbsp;</span></React.Fragment> ) }
                </li>
                <li>タグページ:&nbsp;
                    { gnavdata.tags.distinct.map( ( tag, i ) => <React.Fragment key={ i }><Link to={ `/tags/${ tag }` } className='text-blue-500 hover:text-blue-400 font-bold'>{ tag }</Link><span>&nbsp;|&nbsp;</span></React.Fragment> ) }
                </li>
                <li><Link to='/guideline' className='text-blue-500 hover:text-blue-400 font-bold'>guideline</Link></li>
                <li><Link to='/sitemap' className='text-blue-500 hover:text-blue-400 font-bold'>sitemap</Link></li>
                <li><Link to='/usage' className='text-blue-500 hover:text-blue-400 font-bold'>usage</Link></li>
            </ul>
        </nav>
    );
};
