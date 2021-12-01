import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Gnav } from '@components/organisms/Gnav';
type Props = {
    children: {
        mv?: React.ReactNode;
        main: React.ReactNode;
    };
};
type States = {};
export const Base: React.FC<Props> = ( { children } ) => {
    const { main, mv = null } = children;
    return (
        <>
            <Header />
            { mv }
            <Gnav />
            <main>
                { main }
            </main>
            <Footer />
        </>
    );
};
