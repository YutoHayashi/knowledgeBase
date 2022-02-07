import React from 'react';
import { Seo } from '@/components/utils/Seo';
import { Base } from '@/layouts/Base';
type Props = {};
const usage: React.FC<Props> = ( { children } ) => {
    return (
        <>
            <Seo title='使い方' />
            <Base>{ {
                mv: (
                    <section className='py-36 max-w-inner mx-auto'>
                        <h2 className='font-bold text-primary text-5xl tracking-wider mb-10'>使い方</h2>
                    </section>
                ),
                main: (
                    <></>
                ),
            } }</Base>
        </>
    );
};
export default usage;
