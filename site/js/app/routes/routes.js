define(function() {
    return function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "./views/startPage.html",
            controller: "startPageCtrl"
        }).when("/charAnalyzer", {
            templateUrl: "./views/charAnalyzer.html",
            controller: "charAnalyzerCtrl"
        }).when("/charAnalyzerAngular", {
            templateUrl: "./views/charAnalyzerAngular.html",
            controller: "charAnalyzerAngularCtrl"
        }).when("/codeOptimizationExplanation", {
            templateUrl: "./views/codeOptimizationExplanation.html",
            controller: "codeOptimizationExplanationCtrl"
        }).when("/codeOptimizationTests", {
            templateUrl: "./views/codeOptimizationTests.html",
            controller: "codeOptimizationTestsCtrl"
        }).when("/checkboxForms", {
            templateUrl: "./views/checkboxForms.html",
            controller: "checkboxFormsCtrl"
        }).otherwise({
            redirectTo: "/",
        });
    };
});