angular
  .module('loo2poo', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,   $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/loos-index.html',
      controller: 'LoosIndexController',
      controllerAs: 'lic'
    // })
    // .when('/books/:id', {
    //   templateUrl: '../templates/books-show.html',
    //   controller: 'BooksShowController',
    //   controllerAs: 'bsc'
    // })
    // .otherwise({
    //   redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
