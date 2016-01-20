(function(){
  'use strict';

  angular.module('root')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('root', {
        //abstract: true,
        url: '/',
        views: {
          'navBar': {
            /*templateProvider: ['$templateCache', function ($templateCache) {
              return $templateCache.get('navBar/navBar.template.html');
            }]*/
            templateUrl: 'navBar/navBar.template.html',
            controller: 'NavBarController',
            controllerAs: 'navCtrl'
          },
          'navSideBar': {
            templateUrl: 'navSidebar/navSidebar.template.html',
            controller: 'NavSidebarController',
            controllerAs: 'navSideBarCtrl'
          },
          'content': {
            /*template: '<div style="strong">WARNING: If you are seeing this then you need to ' +
            'create a route to override the content view on your page!</div>'*/
            templateUrl: 'overview/overview.template.html'
          }
        }
      });
    }]);
})();
