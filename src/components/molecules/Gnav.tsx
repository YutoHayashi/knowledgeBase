import React from 'react';
import { GnavItem, Props as GnavItemProps } from './GnavItem';
type Props = {
    items: Array<GnavItemProps>;
    className?: string;
};
export const Gnav: React.VFC<Props> = ( { items, className = '' } ) => {
    return (
        <ul { ...{ className: `w-full relative top-0 bg-primary text-white flex justify-start ${ className }`, } }>
            { items.map( ( item, index ) => (
                <GnavItem key={ index } { ...item } />
            ) ) }
        </ul>
    );
};
