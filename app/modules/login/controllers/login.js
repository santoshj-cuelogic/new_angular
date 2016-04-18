(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl', ['$scope', '$state', LoginCtrl]);

    function LoginCtrl($scope, $state) {
        console.log("Inside login controller");
    }

})();
