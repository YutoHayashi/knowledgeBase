import { Seo } from '@/components/utils/Seo';
import { Base } from '@layouts/Base';
import { Link } from 'gatsby';
import React from 'react';
const _404: React.FC<{  }> = ( {  } ) => {
    return (
        <>
            <Seo title='404 NotFound' />
            <Base>{ {
                mv: (
                    <section className='py-36 max-w-inner mx-auto'>
                        <h2 className='font-bold text-primary text-5xl tracking-wider mb-10'>404 | NotFound</h2>
                    </section>
                ),
                main: (
                    <section className='py-14 bg-secondary'>
                        <div className='max-w-inner mx-auto flex justify-center mb-12 w-full text-left'>
                            <Link to='/' className='bg-primary text-16 text-white py-2 px-8 rounded-full'>トップへ戻る</Link>
                        </div>
                    </section>
                ),
            } }</Base>
        </>
    );
}
export default _404;
