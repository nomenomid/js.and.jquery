define(function() {
    function getCheckboxes(selector) {
        var checkboxes = {checked: 0, unchecked: 0, elements: []};
        forEach(bySelector(selector), function(checkbox) {
            checkbox.checked ? checkboxes.checked++ : checkboxes.unchecked++;
            checkboxes.elements.push(checkbox);
        });
        return checkboxes;
    }

    return function(e, output) {
        var checkboxes = getCheckboxes("#form2 [type = checkbox]");
        if(checkboxes.checked === 0) {
            output.textContent = "No checked checkboxes.\nForm submission canceled.";
        } else {
            var checkboxesStates = [];
            checkboxes.elements.forEach(function(checkbox) {
                checkboxesStates.push(checkbox.getAttribute("name") + "\t" + checkbox.checked);
            });
            output.textContent = checkboxesStates.join("\n");
        }
        e.preventDefault();
    }
});