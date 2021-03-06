'use strict';

/**
 * @ngdoc overview
 * @name DF16Retail
 * @description
 * # DF16Retail
 *
 * Main module of the application.
 */

//TO DO Transitions between states
angular
  .module('DF16Retail', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        controller: 'FrameCtrl',
        templateUrl: 'views/frame.html'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('mobile', {
        url: 'mobile',
        parent: 'frame',
        templateUrl: 'views/mobile.html',
        controller: 'MobileCtrl'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
