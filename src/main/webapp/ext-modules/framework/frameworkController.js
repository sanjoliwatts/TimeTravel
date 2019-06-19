"use strict";

angular.module("framework").controller("frameworkController",[
    '$scope',  '$window', '$timeout',  function($scope, $window, $timeout){
        $scope.isMenuButtonVisible = true;
        $scope.$on('menu-item-selected-event', function(evt, data) {
            $scope.routeString = data.route;
            console.log("Hi "+$scope.routeString);
        })

        $($window).on('resize.cdFramework', function() {
            $scope.$apply(function() {
                checkWidth();
            });
        });

        $scope.$on("$destroy", function() {
            $($window).off("resize.cdFramework");
        });

        var checkWidth = function () {
            var width = Math.max($($($window).width(), $window.innerWidth));
            $scope.isMenuVisible =( width> 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $timeout(function() {
            checkWidth();
        },0);

        $scope.menuButtonClicked = function() {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            $scope.$apply();
        } 
        var broadcastMenuState = function() {
            $rootScope.$broadcast('menu-show', {
                show: $scope.isMenuVisible
            })
        }


        console.log("Inside frameworkController");
        $scope.name = 'sanjoli';
    }
])