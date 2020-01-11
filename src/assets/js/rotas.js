(function () {
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'Login',
                controllerAs: 'ad',
                templateUrl: 'app/app.component.html'
            });
    });
})();