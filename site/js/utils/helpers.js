function domReady(func) {
    document.readyState === "complete" ? setTimeout(func) : document.addEventListener("DOMContentLoaded", func);
}

var toArray = Function.prototype.call.bind(Array.prototype.slice);
var byId = document.getElementById.bind(document);
var bySelector = document.querySelectorAll.bind(document);
var forEach = Function.prototype.call.bind(Array.prototype.forEach);

Function.prototype.makeChainable = function() {
    var func = this;
    return function() {
        func.apply(this, arguments);
        return this;
    };
};

Array.prototype.findIndex || (Array.prototype.findIndex = function(func) {
    for(var i = 0, l = this.length; i < l; i++) {
        if(func(this[i], i, this)) {
            return i;
        }
    }
    return -1;
});

Function.prototype.partialRight = function() {
    var func = this;
    var args = toArray(arguments);
    return function() {
        return func.apply(this, toArray(arguments).concat(args));
    };
};

Function.prototype.andExecuteOnce = function() {
    var context = toArray(arguments, 0, 1)[0];
    var args = toArray(arguments, 1);
    this.apply(context, args);
    return this;
};