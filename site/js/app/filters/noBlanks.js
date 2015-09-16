define(function() {
    return function() {
        return function(item) {
            return item ? item.replace(/\s/g, "") : item;
        };
    };    
});