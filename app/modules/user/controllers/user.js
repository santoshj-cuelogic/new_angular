(function() {
    'use strict';

    angular
        .module('user')
        .controller('AddUserCtrl', ['$scope', AddUserCtrl]);

    function AddUserCtrl($scope) {
        $scope.setTitle = 'Add user';
    }

})();
