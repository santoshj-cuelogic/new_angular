(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardCtrl', ['$scope', '$state', 'baseService', DashboardCtrl]);

    function DashboardCtrl($scope, $state, baseService) {
        $scope.blackSpinner = 'assets/img/blackSpinner.gif';

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = baseService.getUserList().userDetails;
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }
    }

})();
