"use strict";

angular.module("framework").controller("frameworkController",[
    '$scope',  function($scope){
        console.log("Inside frameworkController");
        $scope.name = 'sanjoli';
    }
])