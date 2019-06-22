"use strict"

//Here cd stands for custom directive
angular.module('menu').directive('cdMenuGroup', function () {
    return {
        require: '^cdMenu',
        transclude: true,
        scope: {
            label:'@',
            icon:'@'
        },
        templateUrl: 'ext-modules/menu/menuGroup.html',
        link:  function(scope, el, attrs, ctrl){
            scope.isOpen = false;
            scope.closeMenu =function() {
                scope.isOpen = false;
            };
            scope.clicked =function(){
                scope.isOpen = !scope.isOpen;

                if(el.parents('.subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };
            scope.isVertical = function(){
                return ctrl.isVertical() || el.parents('.subitem-section').length > 0;
            };

            scope.setSubmenuPosition = function(){
                var pos = el.offset();
                $('body .subitem-section').css({'left': pos.left + 20, 'top': 36});
            }
        }
    }
})