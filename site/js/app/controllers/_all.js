/* globals angular */

define(["app/controllers/startPage", "app/controllers/charAnalyzer", "app/controllers/charAnalyzerAngular", 
        "app/controllers/codeOptimizationExplanation", "app/controllers/codeOptimizationTests", "app/controllers/checkboxForms"], 
       function(startPageCtrl, charAnalyzerCtrl, charAnalyzerAngularCtrl, codeOptimizationExplanationCtrl,
                codeOptimizationTestsCtrl, checkboxFormsCtrl) {
    var controllers = angular.module("controllers", []);
    controllers.controller("startPageCtrl", startPageCtrl);
    controllers.controller("charAnalyzerCtrl", charAnalyzerCtrl);
    controllers.controller("charAnalyzerAngularCtrl", charAnalyzerAngularCtrl);
    controllers.controller("codeOptimizationExplanationCtrl", codeOptimizationExplanationCtrl);
    controllers.controller("codeOptimizationTestsCtrl", codeOptimizationTestsCtrl);
    controllers.controller("checkboxFormsCtrl", checkboxFormsCtrl);
});