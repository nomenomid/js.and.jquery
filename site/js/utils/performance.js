Function.prototype.testerTimes = function(number) {
    var func = this;
    return function() {
        var args = arguments;
        for(var i = 0; i < number; func.apply(this, args), i++);
    };
};

Function.prototype.testerTime = function(units) {
    var func = this;
    return function() {
        var start = Date.now(), diff;
        func.apply(this, arguments);
        diff = Date.now() - start;
        return units === "s" ? diff / 1000 : units === "m" ? diff / 60000 : units === "h" ? diff / 3600000 : diff;
    };
};

Function.prototype.returnResult = function(name) {
    var func = this;
    return function() {
        return {
            name: name,
            result: func.apply(this, arguments)
        };
    };
};

Function.prototype.makeTestReady = function(times, units, name) {
    return this.testerTimes(times).testerTime(units).returnResult(name);
};