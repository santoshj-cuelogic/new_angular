(function() {
    'use strict';

    angular
        .module('login')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    '@': {
                        templateUrl: 'app/modules/login/views/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            });
    }

})();
