import React from 'react';
type Props = {
    icon: string;
    className?: string;
};
export const Mdi: React.VFC<Props> = ( { icon, className = '' } ) => <i className={ `mdi mdi-${ icon } ${ className }` } />;
