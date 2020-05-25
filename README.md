# next-router-path
> Router path template for next.

## installation
```bash
npm install -S @feizheng/next-router-path
```

## usage
```js
import '@feizheng/next-router-path';

nx.routerPath('/user/:id', { id: 123 });
// result: /user/123
```

## resources
- https://github.com/ThijsTyZ/router-path/blob/master/src/createPath.ts
- https://github.com/lukeed/regexparam
- https://github.com/pillarjs/path-to-regexp
