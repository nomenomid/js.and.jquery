/* globals byId forEach */

define(["app/helpers/charAnalyzerComparators"], function(comparatorGenerator) {
    function charAnalyzer(str) {
        this.str = str;
        this.chars = [];
    }
    
    charAnalyzer.prototype.setStr = function(str) {
    	this.str = str;    
        this.chars = [];
    }.makeChainable();
    
    charAnalyzer.prototype.analyze = function() {
        forEach(this.str, function(char) {
            var charIndex = this.chars.findIndex(function(charInfoArray) {
                if(charInfoArray[0] === char) return true;
            });
            
            charIndex > -1 ? this.chars[charIndex][1]++ : this.chars.push([char, 1]);
        }.bind(this));
    }.makeChainable();
    
    charAnalyzer.prototype.orderBy = function(field, order) {
        this.chars.sort(comparatorGenerator(field, order));
    }.makeChainable();
    
    charAnalyzer.prototype.printToHtml = function(id) {
        var charsCopy = this.chars.slice(0);
        charsCopy.forEach(function(charInfoArray, index, charsCopy) {
            charsCopy[index] = "  " + charsCopy[index].join("\t  ");
        });
        byId(id).textContent = charsCopy.length ? "char" + "\t" + "count" + "\n" + charsCopy.join("\n") : "";
    }.makeChainable();
    
    return new charAnalyzer();
});