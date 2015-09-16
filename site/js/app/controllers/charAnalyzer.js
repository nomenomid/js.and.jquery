/* globals byId domReady */

define(["app/modules/charAnalyzer"], function(charAnalyzer) {
    return function($scope) {
        $scope.exerciseName = "Char Frequency";
        $scope.version = "JS";
        
        var outputId = "stringAnalysisOutput";
        
        function printCharsToHtml() {
            var str = byId("charsToAnalyze").value.toLowerCase().replace(/\s/g, "");
            var sortField = byId("sortField").value;
            var sortOrder = byId("sortOrder").value;
            charAnalyzer.setStr(str).analyze().orderBy(sortField, sortOrder).printToHtml(outputId);
        }
        
        domReady(function() {
            byId("sortField").addEventListener("change", printCharsToHtml);
            byId("sortOrder").addEventListener("change", printCharsToHtml);
            byId("charsToAnalyze").addEventListener("keyup", printCharsToHtml);
        });
    }; 
});