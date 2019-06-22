"use strict";

angular.module("framework").controller("frameworkController",[
    '$scope',  '$window', '$timeout',  '$rootScope', '$location',  function($scope, $window, $timeout, $rootScope, $location){
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVisible = true;
        $scope.isMenuVertical = true;

        $scope.$on('menu-item-selected-event', function(evt, data) {
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();  
            console.log("Hi "+$scope.routeString);
        });

        $scope.$on('menu-orientation-changed-event', function(evt, data){
            $scope.isMenuVertical = data.isMenuVertical;
        })

        $($window).on('resize.cdFramework', function() {
            $scope.$apply(function() {
                checkWidth();
                broadcastMenuState();
            });
        });

        $scope.$on("$destroy", function() {
            $($window).off("resize.cdFramework");
        });

        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible =( width> 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        

        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            $scope.$apply();
        };
        var broadcastMenuState = function() {
            $rootScope.$broadcast('menu-show', {
                show: $scope.isMenuVisible, isVertical: $scope.isMenuVertical,
                allowHorizontalToggle: !$scope.isMenuButtonVisible
            });
        };
        $timeout(function() {
            checkWidth();
        },0);

        console.log("Inside frameworkController");
        $scope.name = 'sanjoli';
    }
])