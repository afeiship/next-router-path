# next-router-path
> Router path template for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-router-path
```


## usage
```js
import '@jswork/next-router-path';

nx.routerPath('/user/:id', { id: 123 });
// result: /user/123
```

## resources
- https://github.com/ThijsTyZ/router-path/blob/master/src/createPath.ts
- https://github.com/lukeed/regexparam
- https://github.com/pillarjs/path-to-regexp

## license
Code released under [the MIT license](https://github.com/afeiship/next-router-path/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-router-path
[version-url]: https://npmjs.org/package/@jswork/next-router-path

[license-image]: https://img.shields.io/npm/l/@jswork/next-router-path
[license-url]: https://github.com/afeiship/next-router-path/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-router-path
[size-url]: https://github.com/afeiship/next-router-path/blob/master/dist/next-router-path.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-router-path
[download-url]: https://www.npmjs.com/package/@jswork/next-router-path
