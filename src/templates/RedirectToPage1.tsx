import { navigate } from 'gatsby';
export default (  ) => {
    if ( typeof window !== `undefined` ) navigate( '1' );
    return null;
};
