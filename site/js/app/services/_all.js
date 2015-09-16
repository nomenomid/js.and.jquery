/* globals angular */

define(["app/services/charAnalyzer"], function(charAnalyzerSvc) {
    var services = angular.module("services", []);
    services.service("charAnalyzerSvc", charAnalyzerSvc);
});