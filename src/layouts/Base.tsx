import { Gnav } from '@components/molecules/Gnav';
import React from 'react';
type Props = {
    mv: 'full' | 'notfull',
}
type States = {}
export const Base: React.FC<Props> = ( { children, mv } ) => {
    return (
        <>
            <div className={ `w-full relative ${  mv === 'full' ? 'h-screen' : ''  }` }>
                <h1>アルタ ナレッジベース</h1>
                <Gnav className={ `absolute bottom-0` } />
            </div>
            { children }
        </>
    );
}
