define(function() {
    return function($scope) {
        $scope.exerciseName = "Char Frequency";
        $scope.version = "Angular";
        
        $scope.sortFields = [
            {value: "char", name: "character"},
            {value: "count", name: "count"}
        ];
        
        $scope.sortOrders = [
            {value: "asc", name: "ascending"},
            {value: "desc", name: "descending"}
        ];
        
        $scope.sortField = $scope.sortFields[1].value;
        $scope.sortOrder = $scope.sortOrders[1].value;        
    };    
});