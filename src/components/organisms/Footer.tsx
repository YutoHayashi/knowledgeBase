import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
type Props = {};
export const Footer: React.VFC<Props> = ( {  } ) => {
    return (
        <footer className='bg-primary text-white flex flex-col items-center justify-center pt-16 pb-2'>
            <nav className='mb-12'>
                <ul className='flex'>
                    { [
                        { title: 'トップ', to: '/', },
                        { title: 'リファレンス', to: '/references', },
                        { title: 'バグ', to: '/bugs', },
                        { title: 'パーツ', to: '/parts', },
                        { title: 'ガイドライン', to: '/guideline', },
                        { title: '使い方', to: '/usage', },
                    ].map( ( item, index ) => (
                        <li key={ index }>
                            <Link to={ item.to } className='p-3 mx-2'>{ item.title }</Link>
                        </li>
                    ) ) }
                </ul>
            </nav>
            <small>&copy;2021 Alta Co., Ltd. All Rights Reserved</small>
        </footer>
    );
};
