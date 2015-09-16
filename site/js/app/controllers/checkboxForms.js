/* globals byId */

define(["app/modules/inactivityTracker", "app/modules/checkboxFormJQ", "app/modules/checkboxFormJS", "app/modules/checkboxFormJQLazy"], 
        function(inactivityTracker, jqSubmitHandler, jsSubmitHandler, LazyLoadDemo) {
    return function($scope) {
        $scope.exerciseName = "Checkbox Forms";
        $scope.processIncludeSubscribers = function() {
            inactivityTracker();
        };
        
        $("#form1").submit(jqSubmitHandler.partialRight($("#results1")));
        byId("form2").addEventListener("submit", jsSubmitHandler.partialRight(byId("results2")));
        LazyLoadDemo();
    }; 
});