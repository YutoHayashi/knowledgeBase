import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
type Props = {};
export const Header: React.VFC<Props> = ( {  } ) => {
    const { site } = useStaticQuery( graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    ` );
    return (
        <header className='bg-primary text-white'>
            <div className='flex items-center justify-between max-w-inner mx-auto'>
                <h1 className='tracking-wider'>
                    <Link to='/' className='py-3 block'>{ site.siteMetadata.title }</Link>
                </h1>
                <nav>
                    <ul className='flex'>
                        { [
                            { 'title': 'トップ', 'to': '/', },
                            { 'title': 'リファレンス', 'to': '/references', },
                            { 'title': 'バグ', 'to': '/bugs', },
                            { 'title': 'パーツ', 'to': '/parts', },
                            { 'title': 'ガイドライン', 'to': '/guidelines', },
                            { 'title': '使い方', 'to': '/usage', },
                        ].map( ( item, index ) => (
                            <li key={ index }>
                                <Link to={ item.to } className='p-3 mx-2'>{ item.title }</Link>
                            </li>
                        ) ) }
                    </ul>
                </nav>
            </div>
        </header>
    );
};
