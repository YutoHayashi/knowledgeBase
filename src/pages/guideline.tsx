import { Seo } from '@/components/utils/Seo';
import { Base } from '@/layouts/Base';
import React from 'react';
type Props = {};
const guideline: React.FC<Props> = ( { children } ) => {
    return (
        <>
            <Seo title='ガイドライン' />
            <Base>{ {
                mv: (
                    <section className='py-36 max-w-inner mx-auto'>
                        <h2 className='font-bold text-primary text-5xl tracking-wider mb-10'>ガイドライン</h2>
                    </section>
                ),
                main: (
                    <></>
                ),
            } }</Base>
        </>
    );
};
export default guideline;
