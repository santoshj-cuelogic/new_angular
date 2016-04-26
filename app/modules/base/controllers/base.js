(function() {
    'use strict';

    angular
        .module('base')
        .controller('BaseCtrl', ['$scope', '$state', 'baseService', BaseCtrl]);

    function BaseCtrl($scope, $state, baseService) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = baseService.getMenu().userMenu;
    }

})();
