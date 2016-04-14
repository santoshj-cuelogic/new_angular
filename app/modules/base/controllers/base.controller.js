(function() {
    'use strict';

    angular
        .module('base')
        .controller('BaseCtrl', ['$scope', '$state', BaseCtrl]);

    function BaseCtrl($scope, $state) {
        console.log("Inside Base controller");
    }

})();
