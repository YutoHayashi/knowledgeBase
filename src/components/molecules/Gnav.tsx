import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GnavQuery } from '@/../types/graphql-types';
type Props = {
    className: string;
};
type GnavItem = {
    title: string;
    to: string;
    order?: number;
    children?: Array<GnavItem>;
};
const GnavCommonItemData: Array<GnavItem> = [
    { title: 'トップ', to: '/', order: 0, },
    { title: '使い方', to: '/usage', order: 98 },
    { title: 'ガイドライン', to: '/guideline', order: 99, },
    { title: 'サイトマップ', to: '/sitemap', order: 100, },
];
const ItemNode: ( args: { key: number; item: GnavItem; } ) => React.ReactNode = ( { key, item } ) => {
    const { title, to, children } = item;
    const ul = React.createRef<HTMLUListElement>(  );
    return (
        <li
            { ...{ key } }
            onMouseOver={ e => ul.current?.classList.remove( `hidden` ) }
            onMouseOut={ e => ul.current?.classList.add( `hidden` ) }
            className={ `relative whitespace-nowrap` }
        >
            <Link { ...{ to } } className={ `block text-blue-500 hover:text-blue-400 font-bold py-2 px-5` }>{ title }</Link>
            <ul ref={ ul } className={ `absolute bottom-full bg-gray-50 w-min-full w-full hidden` }>
                { ( children || [  ] ).sort( ( p, c ) => ( p.order || 0 ) - ( c.order || 0 ) ).map( ( childItem, i ) => ItemNode( { key: i, item: childItem } ) ) }
            </ul>
        </li>
    );
};
export const Gnav: React.FunctionComponent<Props> = ( { className } ) => {
    const gnavQuery: GnavQuery = useStaticQuery( graphql`
        query Gnav {
            cats: allMarkdownRemark {
                distinct( field: frontmatter___category )
            }
            tags: allMarkdownRemark {
                distinct( field: frontmatter___tags )
            }
        }
    ` );
    const { cats, tags } = gnavQuery;
    return (
        <nav className={ `bg-gray-100 w-full ${ className }` }>
            <ul className={ `flex items-center` }>
                { [
                    ...Array.from( GnavCommonItemData ),
                    ...[
                        { title: 'カテゴリー', to: '/', order: 1, children: cats.distinct.map( ( cat, i ) => ( { title: cat, to: `/categories/${ cat }`, order: i } ) ) },
                        { title: 'タグ', to: '/', order: 2, children: tags.distinct.map( ( tag, i ) => ( { title: tag, to: `/tags/${ tag }`, order: i, } ) ) },
                    ],
                ].sort( ( p, c ) => ( p.order || 0 ) - ( c.order || 0 ) ).map( ( item, key ) => ItemNode( { key, item } ) ) }
            </ul>
        </nav>
    );
};
