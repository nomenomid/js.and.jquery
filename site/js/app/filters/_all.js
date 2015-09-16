/* globals angular */

define(["app/filters/charAnalyzer", "app/filters/noBlanks", "app/services/_all"], function(charAnalyzerFltr, noBlanksFltr) {
    var filters = angular.module("filters", ["services"]);
    filters.filter("charAnalyzer", charAnalyzerFltr);
    filters.filter("noBlanks", noBlanksFltr);
});