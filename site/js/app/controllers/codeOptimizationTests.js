define(["utils/performance"], function() {
    return function($scope, $timeout) {
        $scope.exerciseName = "Code Optimization"; 
        $scope.version = "Tests";
        $scope.runningTests = false;
        $scope.runTests = runTests;
        
        function runTests() {
            $scope.testResults = [];
            $scope.runningTests = true;
            var numberOfRuns = 100;
            var timeUnit = "s";
            
            $("body").append("<article id = testMarkup><section><div><div></div></div></section></article>");
            
            var descriptions = ["baseline", 
                                "baseline -(DOM querying)", 
                                "baseline -(DOM querying & insertion)",
                                "baseline -(DOM querying & insertion) +(jQuery)"];   
                                
            var funcs = [
                function() {
                    var $divs = $("#testMarkup section:first-child div");
                    for (var i = 0; i < 100; i++) {
                        $("article section:first-child div").append("<p>" + i + "</p>");
                    }
                    
                    $divs.find("p").remove();
                },
                
                function() {
                    var $divs = $("#testMarkup section:first-child div");
                    for (var i = 0; i < 100; i++) {
                        $divs.append("<p>" + i + "</p>");
                    }
                    
                    $divs.find("p").remove();
                },
                
                function() {
                    var $divs = $("#testMarkup section:first-child div");
                    var $div = $("<div />").addClass("paragraphHolder");
                    for (var i = 0; i < 100; i++) {
                        $div.append("<p>" + i + "</p>");
                    }
                    $divs.append($div);
                    $divs.find(".paragraphHolder").remove();
                },
        
                function() {
                    var $divs = $("#testMarkup section:first-child div");
                    var $div = $("<div />").addClass("paragraphHolder");
                    var $p = $("<p />");
                    for (var i = 0; i < 100; i++) {
                        $div.append($p.clone().text(i));
                    }
                    $divs.append($div);
                    $divs.find(".paragraphHolder").remove();
                }
            ].map(function(func, index, arr) {
                return func.makeTestReady(numberOfRuns, timeUnit, descriptions[index]);
            });
            
            function runFunctions(funcs) {
                $scope.testResults.push(funcs.shift()());
                funcs.length ? 
                    $timeout(runFunctions.partialRight(funcs)) : 
                    ($scope.runningTests = false, $("#testMarkup").remove());
            }
            
            $timeout(function() {
                runFunctions(funcs);    
            }, 200);
        }
    };
});