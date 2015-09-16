require.config({
    baseUrl: "js",
    
    paths: {
        "jquery":           "lib/jquery.min",
        "angular":          "lib/angular.min",
        "angular-route":    "lib/angular-route.min",
        "bootstrap":        "lib/bootstrap"
    },
    
    shim: {
        "angular-route": ["angular"],
        "bootstrap": ["jquery"]
    },
    
    deps: ["app"]
});