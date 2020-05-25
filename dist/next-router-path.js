/*!
 * name: @feizheng/next-router-path
 * description: Router path template for next.
 * homepage: https://github.com/afeiship/next-router-path
 * version: 1.0.2
 * date: 2020-05-25T01:03:14.219Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var ROUTE_RE = /:(\w+)\??/g;

  nx.routerPath = function (inString, inArgs) {
    return inString.replace(ROUTE_RE, function (key, match) {
      return nx.get(inArgs, match, '');
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.routerPath;
  }
})();

//# sourceMappingURL=next-router-path.js.map
