import React from 'react';
import { Link } from 'gatsby';
import { Mdi } from './Mdi';
export type Handler = {
    startLoading: (  ) => void;
    endLoading: (  ) => void;
};
type Props = JSX.IntrinsicElements[ 'button' ] & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    to?: string;
};
type States = {
    loading: boolean;
};
let state: States;
let setState: React.Dispatch<React.SetStateAction<States>>;
export const Btn = React.forwardRef<Handler, Props>( ( { children, to, onClick = e => null, className = '' }, ref ) => {
    [ state, setState ] = React.useState<States>( {
        loading: false,
    } );
    const { loading } = state;
    const startLoading = (  ) => setState( { loading: true, } );
    const endLoading = (  ) => setState( { loading: false, } );
    React.useImperativeHandle( ref, (  ) => ( { startLoading, endLoading } ) );
    if ( to ) {
        return <Link to={ to } { ...{ className } }>{ children }</Link>;
    } else {
        return (
            <button { ...{ onClick, className } }>
                { loading ? (
                    <Mdi icon='loading' className='mdi-spin' />
                ) : children }
            </button>
        );
    }
} );
