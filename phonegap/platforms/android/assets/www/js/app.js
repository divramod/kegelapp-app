//APP.js
//'use strict';

angular.module('kegelApp', ['ngRoute', 'mobile-angular-ui'])
    .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/home', {
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/bahn', {
            templateUrl: 'partials/bahn/bahn.html',
            controller: 'BahnCtrl'
        });
        $routeProvider.when('/eingabe', {
            templateUrl: 'partials/eingabe/eingabe.html',
            controller: 'EingabeCtrl'
        });
        $routeProvider.when('/ergebnisse', {
            templateUrl: 'partials/ergebnisse/ergebnisse.html',
            controller: 'ErgebnisseCtrl'
        });
        $routeProvider.when('/user', {
            templateUrl: 'partials/user/user.html',
            controller: 'UserCtrl'
        });
        $routeProvider.when('/log', {
            templateUrl: 'partials/log/log.html',
            controller: 'LogCtrl'
        });
    }
])
    .run(['$rootScope','StartupService',
    function($rootScope, StartupService) {
        console.log("RUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUNNNNNNNNNNNNNNNNNN");
        StartupService.run();
    }
]);
