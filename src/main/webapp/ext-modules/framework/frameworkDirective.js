"use strict"

//Here cd stands for custom directive
angular.module("framework").directive("cdFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'

        },
        controller: "frameworkController",
        templateUrl: "ext-modules/framework/framework.html"
    }
})