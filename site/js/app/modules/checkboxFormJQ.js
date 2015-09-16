define(function() {
    return function(e, $output) {
        if($(this).find(":checked").length === 0) {
            $output.text("No checked checkboxes.\nForm submission canceled.");
        } else {
            var checkboxesStates = [];
            $(this).find("[type = checkbox]").each(function(index, element) {
                checkboxesStates.push($(element).attr("name") + "\t" + $(element).is(":checked"));
            });
            $output.text(checkboxesStates.join("\n"));
        }
        return false;
    };
});