var checkboxs = document.querySelectorAll(".collapse-container input[type=checkbox]");

checkboxs.forEach( box => {
    box.addEventListener('change', function() {
        if (box.checked) {
            console.log("Checkbox is checked..");
        } else {
            console.log("Checkbox is not checked..");
        }
    });
});
