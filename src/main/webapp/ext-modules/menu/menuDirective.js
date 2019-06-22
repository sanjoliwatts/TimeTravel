"use strict"

//Here cd stands for custom directive
angular.module('menu').directive('cdMenu',['$timeout', function ($timeout) {
    return {
        transclude: true,
        scope: {

        },
        controller: "menuController",
        templateUrl: "ext-modules/menu/menu.html",
        link: function(scope, el, attr){
            var item = el.find('selectable-item:first');
            $timeout(function(){
                item.trigger('click');
            });
        }
    }
}])