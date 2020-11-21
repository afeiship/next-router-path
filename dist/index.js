/*!
 * name: @jswork/next-router-path
 * description: Router path template for next.
 * homepage: https://github.com/afeiship/next-router-path
 * version: 1.0.0
 * date: 2020-11-21 10:47:04
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var ROUTE_RE = /:(\w+)\??/g;

  nx.routerPath = function (inString, inArgs) {
    return inString.replace(ROUTE_RE, function (_, match) {
      return nx.get(inArgs, match, '');
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.routerPath;
  }
})();
