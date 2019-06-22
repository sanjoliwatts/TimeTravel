"use strict"

//Here cd stands for custom directive
angular.module('menu').directive('cdMenuItem', function () {
    return {
        require: '^cdMenu',
        scope: {
            label: '@',
            icon:  '@',
            route:'@'

        },
        templateUrl: "ext-modules/menu/menuItem.html",
        link: function(scope, el, attr, ctrl){
            scope.isActive = function(){
                return el=== ctrl.getActiveElement();
            }

            scope.isVertical = function(){
                return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
            }

            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function() {
                    ctrl.setActiveItem(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});