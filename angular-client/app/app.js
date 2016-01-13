(function() {
  'use strict';

  var myApp = angular.module('orgFinder',
    [
      /*
       Below are all of the dependencies to the application.
       */

      //////////////////////////////////////////////////////////////////////////////////////////
      // 3rd PARTY DEPENDENCIES

      /*The 'ui-router' is provided by the 'angular-ui-router' package. It manages all of
      the routing in the application and allows for advanced features such as multiple
      views on a page and nested views.
      (This functionality should be implemented in Angular 2.0!)
      See: http://angularjs.blogspot.com/2015/09/angular-2-survey-results.html */
      'ui.router',

      /* ui.bootstrap is a rewrite of many of Bootstrap's components in Angular */
      'ui.bootstrap',

      /* allows a JSON object to be converted into an array when using ng-repeat */
      'angular-toArrayFilter',

      //////////////////////////////////////////////////////////////////////////////////////////
      // LOCAL DEPENDENCIES
      'root',
      'config',
      'navBar',
      'organizations',
	    'createClub',
      'modal',
      'survey',
      'massUpload',
      'fileUpload',
      'login'
    ]);

  myApp.run(['$rootScope', '$location', function ($rootScope, $location, loginService) {

    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.access.restricted && !loginService.isLoggedIn()) {
        $location.path('/login');
      }
    });
  }]);
})();
