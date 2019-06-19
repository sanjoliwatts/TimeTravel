"use strict"

//Here cd stands for custom directive
angular.module('menu').directive('cdMenu', function () {
    return {
        transclude: true,
        scope: {

        },
        controller: "menuController",
        templateUrl: "ext-modules/menu/menu.html",
        link: function(scope, el, attr){

        }
    }
})