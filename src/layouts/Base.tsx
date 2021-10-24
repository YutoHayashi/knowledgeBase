import React from 'react';
type Props = {  }
type States = {  }
export class Base extends React.Component<Props, States> {
    public render(  ) {
        const { children } = this.props;
        return (
            <>
                { children }
            </>
        );
    }
}
