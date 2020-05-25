(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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
