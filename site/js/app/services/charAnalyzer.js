/* globals forEach */

define(["app/helpers/charAnalyzerComparators"], function(comparatorGenerator) {
    return function() {
        this.str;
        this.chars = [];
        
        this.setStr = function(str) {
            this.str = str;    
            this.chars = [];
        }.makeChainable();
        
        this.analyze = function() {
            forEach(this.str, function(char) {
                var charIndex = this.chars.findIndex(function(charInfoArray) {
                    if(charInfoArray[0] === char) return true;
                });
                
                charIndex > -1 ? this.chars[charIndex][1]++ : this.chars.push([char, 1]);
            }.bind(this));
        }.makeChainable();
        
        this.orderBy = function(field, order) {
            this.chars.sort(comparatorGenerator(field, order));
        }.makeChainable();
        
        this.returnTable = function(id) {
            var charsCopy = this.chars.slice(0);
            charsCopy.forEach(function(charInfoArray, index, charsCopy) {
                charsCopy[index] = "  " + charsCopy[index].join("\t  ");
            });
            return charsCopy.length ? "char" + "\t" + "count" + "\n" + charsCopy.join("\n") : "";
        };
    }; 
});