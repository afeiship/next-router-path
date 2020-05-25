/*!
 * name: @feizheng/next-router-path
 * description: Router path template for next.
 * homepage: https://github.com/afeiship/next-router-path
 * version: 1.0.0
 * date: 2020-05-25T00:48:07.165Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var ROUTE_RE = /:(\w+)\??/g;
  var CHAR_Q = '?';

  nx.routerPath = function (inString, inArgs) {
    return inString.replace(ROUTE_RE, function (key, match) {
      var value = nx.get(inArgs, match);
      if (key.indexOf(CHAR_Q) === -1) return value;
      return inArgs && value ? value : '';
    })
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.routerPath;
  }
})();

//# sourceMappingURL=next-router-path.js.map
