(function () {
  require('../src');

  describe('api.basic test', () => {
   test('normal case: nx.routerPath', function () {
      var res1 = nx.routerPath('/user/:id', { id: 123 });
      var res2 = nx.routerPath('/user/:id?', { id: 123 });
      var res3 = nx.routerPath('/user/:id?');
      var res4 = nx.routerPath('/user/:id?', {});

      expect(res1).toBe('/user/123');
      expect(res2).toBe('/user/123');
      expect(res3).toBe('/user/');
      expect(res4).toBe('/user/');
    });
  });
})();
