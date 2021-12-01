import React from 'react';
import { Link } from 'gatsby';
import { Gnav } from './Gnav';
export type Props = {
    title: string;
    to: string;
    children?: Array<Props>;
};
export const GnavItem: React.FC<Props> = ( { title, to, children = [  ] } ) => {
    const childrenWrapper: React.Ref<HTMLDivElement> = React.createRef<HTMLDivElement>(  );
    const onMouseOver: React.MouseEventHandler = e => childrenWrapper.current?.classList.remove( 'hidden' );
    const onMouseOut: React.MouseEventHandler = e => childrenWrapper.current?.classList.add( 'hidden' );
    return (
        <li { ...{ onMouseOver, onMouseOut } }>
            <Link to={ to } className='block p-3 mx-2'>{ title }</Link>
            <div className='hidden absolute w-full left-0' ref={ childrenWrapper }>
                { children.length > 0 ? <Gnav items={ children } className='z-10' /> : null }
            </div>
        </li>
    );
};
