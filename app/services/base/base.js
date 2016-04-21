angular.module('base.service', [])
    .factory('baseService', ['$http', baseService]);



function baseService($http) {
    var service = {};

    service.getMenu = getMenu;
    service.getUserList = getUserList;

    return service;

    function getMenu() {
        var menus = {};
        return menus = {
            "userMenu": [{
                "name": "Dashboard",
                "class": "dashboard",
                "action": "base.dashboard",
            }, {
                "name": "Proposals",
                "class": "proposals",
                "action": "javascript:void(0);",
            }, {
                "name": "Project",
                "class": "project",
                "action": "javascript:void(0);",
            }, {
                "name": "Data Mapping",
                "class": "data-mapping",
                "action": "javascript:void(0);",
            }, {
                "name": "Clients",
                "class": "clients",
                "action": "javascript:void(0);",
            }, {
                "name": "Data Providers",
                "class": "data-providers",
                "action": "javascript:void(0);",
            }]
        }
    }
    //END

    function getUserList() {
        var userList = {};

        return userList = {
            "userDetails": [{
                "id": 1,
                "name": "Prasanna",
                "department": "Developer",
                "salary": 1000,
                "image": "data:image/jpeg;base64,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"
            },{
                "id": 1,
                "name": "Ayush",
                "department": "I.T",
                "salary": 1000,
                "image": "http://localhost/angular-boilerplate/assets/images/IMG_3050.JPG"
            }, {
                "id": 2,
                "name": "Bobo",
                "department": "Project manager",
                "salary": 100000,
                "image": "http://localhost/angular-boilerplate/assets/images/textures-selection-nice-high-resolution_2165080.jpg"
            }, {
                "id": 3,
                "name": "Baby",
                "department": "developer",
                "salary": 2000,
                "image": "http://localhost/angular-boilerplate/assets/images/404.png"
            }, {
                "id": 4,
                "name": "Nilesh",
                "department": "Designer",
                "salary": 5500,
                "image": "http://localhost/angular-boilerplate/assets/images/6309_1280x800.jpg"
            }, {
                "id": 5,
                "name": "amol",
                "department": "Manager",
                "salary": 100500,
                "image": "http://localhost/angular-boilerplate/assets/images/brand-avatar.jpg"
            }, {
                "id": 6,
                "name": "ganesh",
                "department": "Accountant",
                "salary": 1000,
                "image": "http://localhost/angular-boilerplate/assets/images/ipgeo.png"
            }]
        }
    }
    //END
};
