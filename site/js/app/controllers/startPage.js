define(["app/modules/technologiesList"], function(technologiesList) {
    return function($scope) {
        $scope.links = technologiesList;
    }; 
});