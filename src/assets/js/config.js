(function () {
    'use strict';

    angular.module('app').constant('SETTINGS', {
        "DADOSUSUARIOS": "dadousuario"
    });

    angular.module('app').run(function ($rootScope, SETTINGS) {
        var dadousuario = localStorage.getItem(SETTINGS.DADOSUSUARIOS);

        $rootScope.dadousuario = [];
        
        if (dadousuario) {
            var items = angular.fromJson(dadousuario);
            angular.forEach(items, function (value) {
                $rootScope.dadousuario.push(value);
            });
        }

    });

})();