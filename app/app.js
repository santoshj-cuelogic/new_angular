(function() {

    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('kantar', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'config',
            'login',
            'base',
            'dashboard'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        console.log('Hello');
        // $locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        $urlRouterProvider.otherwise('/login');
    }

})();
