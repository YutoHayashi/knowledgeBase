---
title: "【React】useMountedRefフック"
date: "2021-11-05"
category: "パーツ"
tags: ["React","JavaScript"]
author: "べ"
---

```javascript:title=useMountedRef.jsx
export useMountedRef = (  ) => {
    const mounted = useRef( false );
    useEffect( (  ) => {
        mounted.current = true;
        return (  ) => ( mounted.current = false );
    } );
    return mounted;
}
```
