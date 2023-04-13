// function to generate dropdown
function generateDropdown() {
    $.ajax({
        type : "POST",
        url : "../handler.php",
        data : {'type' : 'gen_dropdown'},
        dataType : 'text',
        success : function(res) {
            $("#main-dropdown").html(res);
        }
    })
}
generateDropdown();

$(document).ready(function() {
    // ajax call to generate the sub-category dropdown
    $(document).on('click', '.wrapper__dropdown', function() {
        category = $("#main-dropdown").val();
        $.ajax({
            type : "POST",
            url : '../handler.php',
            data : {'type' : 'sub_dropdown', 'category' : category},
            dataType : 'text',
            success : function(res) {
                $("#sub-dropdown").html(res);
            }
        })
    });
});