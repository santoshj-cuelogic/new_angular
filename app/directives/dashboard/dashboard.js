angular.module('dashboard.directive', [])
    .directive("tabMenu", function() {

        return {
            restrict: "E",
            scope: {
                "tabMenuList": "="
            },
            templateUrl: "app/directives/dashboard/views/tabmenu.html",            
            controller: ['$scope', '$location', function($scope, $location) {                

                $scope.subTabMenus = function() {
                    var i = 0;

                    angular.forEach($scope.tabMenuList, function(menu) {
                        
                        $scope.tabMenuList[i]["activeCls"] = '';
                        
                        if(menu.action == $location.url().replace(/\//g, '')) {
                            $scope.tabMenuList[i]["activeCls"] = 'active';
                        }
                        i ++;                        
                    });                        
                    return $scope.tabMenuList;                    
                };
            }]
        };
    });

