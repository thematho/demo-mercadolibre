function AppRouting($stateProvider, $urlRouterProvider) {
  'ngInject';
  //Routing
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app',
    })
    .state('app.results', {
      url: 'items?search',
      component: 'searchResult',
    })
    .state('app.details', {
      url: 'items/:id',
      component: 'itemDetails'
    });
}

export default AppRouting;