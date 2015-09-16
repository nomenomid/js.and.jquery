define(function() {
    return function() {
        var $lastFormHolder = $(".col-sm-4:eq(2)");
        var formCount = 0;
    
        var adding = function(add) {
            var $deleteButtons = $lastFormHolder.find(".deleteButton");
            add ? formCount++ : formCount--;
            add && formCount === 2 ? 
                $deleteButtons.removeAttr("disabled") : 
                formCount === 1 ? 
                    $deleteButtons.attr("disabled", true) : 
                    null;
        }.andExecuteOnce(this, true);
    
        $lastFormHolder.on("click", ".deleteButton", function(e) {
            var $form = $(this).parent();
            $form.remove();
            adding(false);
        });
        
        $lastFormHolder.on("click", ".cloneButton", function(e) {
            var $lastForm = $lastFormHolder.find("form:last");
            var lastFormId = $lastForm.attr("id");
            var $newForm = $(this).parent().clone();
            $newForm.attr("id", lastFormId.replace(/\d+/gi, function(match) {return +match + 1;}))
                    .css("margin-top", "12px").insertAfter($lastForm);
            adding(true);
        });
        
        $lastFormHolder.on("submit", "form", function() {
            if($(this).find(":checked").length === 0) {
                $("#results3").text($(this).attr("id") + "\n" + "No checked checkboxes.\nForm submission canceled.");
            } else {
                var checkboxesStates = [];
                $(this).find("[type = checkbox]").each(function(index, element) {
                    checkboxesStates.push($(element).attr("name") + "\t" + $(element).is(":checked"));
                });
                $("#results3").text($(this).attr("id") + "\n" + checkboxesStates.join("\n"));
            }
            return false;
        });  
    };
});