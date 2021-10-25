import { Seo } from '@components/Seo';
import { Base } from '@layouts/Base';
import React from 'react';
const _404: React.FC<{  }> = ( {  } ) => {
    return (
        <>
            <Seo title='404 NotFound' />
            <Base>
                404 NotFound
            </Base>
        </>
    );
}
export default _404;
