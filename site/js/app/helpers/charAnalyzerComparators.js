define(function() {
    return function(field, order) {
        field = field === "char" ? 0 : 1;
        order = order === "asc" ? 1 : -1;
        return function(arr1, arr2) {
            return order * (arr1[field] > arr2[field] ? 1 : arr1[field] === arr2[field] ? 0 : -1);
        };
    };
});