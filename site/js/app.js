/* globals angular */

require(["app/routes/routes", "app/controllers/_all", "app/filters/_all", "jquery", "bootstrap", "angular", "angular-route", 
         "utils/helpers"], function(routes) {
    var app = angular.module("technical", ["ngRoute", "controllers", "filters"]);
    app.config(routes);
    angular.bootstrap(document, ["technical"]);
});