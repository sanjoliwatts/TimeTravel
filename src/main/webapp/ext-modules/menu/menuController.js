angular.module('menu').controller('menuController', ['$scope','$rootScope', 
function($scope, $rootScope){

    $scope.showMenu = true;
    $scope.openMenuScope = null;
    $scope.isVertical = true;
    $scope.allowHorizontalToggle = true;

this.getActiveElement =function(){
    return $scope.activeElement;
}

this.setActiveItem = function(el) {
    $scope.activeElement = el;
};

this.isVertical = function(){
    return $scope.isVertical;
}

this.setRoute = function(route) {
    $rootScope.$broadcast('menu-item-selected-event', 
    { route: route});
};

this.setOpenMenuScope = function( scope ){
    $scope.openMenuScope = scope;
}

$scope.toggleMenuOrientation = function(){
    // close any menu open
    if($scope.openMenuScope)
        $scope.openMenuScope.closeMenu();


    $scope.isVertical = !$scope.isVertical;
    $rootScope.$broadcast('menu-orientation-changed-event', 
    { isMenuVerical : $scope.isVertical });
};

angular.element(document).bind('click', function (e) {
    if ($scope.openMenuScope && !$scope.isVertical) {
        if ($(e.target).parent().hasClass('ps-selectable-item'))
            return;
        $scope.$apply(function () {
            $scope.openMenuScope.closeMenu();
        });
        e.preventDefault();
        e.stopPropagation();
    }
});   

$scope.$on('menu-show', function(evt, data) {
    $scope.showMenu = data.show;
    $scope.isVertical = data.isVertical;
    $scope.allowHorizontalToggle = data.allowHorizontalToggle;
});



}
]);