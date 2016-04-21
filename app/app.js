(function() {

    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('angular-client', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'config',
            'login',
            'base',
            'dashboard',
            'user'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        $urlRouterProvider.otherwise('/login');
    }

})();
