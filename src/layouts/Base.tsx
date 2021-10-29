import { Gnav } from '@components/molecules/Gnav';
import React from 'react';
type Props = {}
type States = {  }
export const Base: React.FC<Props> = ( { children } ) => {
    return (
        <>
            <h1>アルタ ナレッジベース</h1>
            <Gnav />
            { children }
        </>
    );
}
