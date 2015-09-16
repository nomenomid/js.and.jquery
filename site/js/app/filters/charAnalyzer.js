define(function() {
    return function(charAnalyzerSvc) {
        return function(item, sortField, sortOrder) {
            return item ? charAnalyzerSvc.setStr(item).analyze().orderBy(sortField, sortOrder).returnTable() : item;
        };
    };
});