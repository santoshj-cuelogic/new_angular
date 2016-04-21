angular.module('dashboard.directive', [])
    .directive("tabMenu", tabMenu);

function tabMenu() {
    return {
        restrict: "E",
        scope: {
            "tabMenuList": "="
        },
        templateUrl: "app/directives/dashboard/views/tabmenu.html",
        controller: ['$scope', '$location', function($scope, $location) {

            $scope.subTabMenus = function() {
                var increment = 0;

                angular.forEach($scope.tabMenuList, function(menu) {

                    $scope.tabMenuList[increment]["activeCls"] = '';

                    if (menu.action == $location.url().replace(/\//g, '')) {
                        $scope.tabMenuList[increment]["activeCls"] = 'active';
                    }
                    increment++;
                });
                return $scope.tabMenuList;
            };
        }]
    };
}
