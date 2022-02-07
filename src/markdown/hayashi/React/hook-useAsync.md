---
title: "【React】useAsyncフック"
date: "2022-02-07"
category: "パーツ"
tags: ["JavaScript", "TypeScript", "React"]
author: "林 裕大"
---

# フック本体
```typescript:title=useAsync.jsx
import React from 'react';
export const useAsync = <D>( args: {
    asyncFunc: (  ) => Promise<D>,
    parameter: any[],
    immediate: boolean,
    initData: D;
} ) => {
    const { asyncFunc, parameter, immediate, initData } = args;
    const [ data, setData ] = React.useState<D>( initData );
    const [ loading, setLoading ] = React.useState<boolean>( immediate );
    const self = React.useRef<boolean>( true );
    const execute = React.useCallback( async (  ) => {
        setLoading( true );
        return await asyncFunc( ...parameter )
            .then( data => {
                setLoading( false );
                setData( data );
            } )
            catch( e => {
                setLoading( false );
                throw e;
            } );
    }, [ asyncFunc, parameter ] );
    React.useEffect( (  ) => {
        if ( immediate ) execute(  );
        return (  ) => {
            self.current = false;
        };
    }, [ immediate, execute ] );
    return {
        data,
        loading,
        execute,
    };
};
```

# 使い方
