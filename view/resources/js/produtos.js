$(()=>{
    $("#searchProduct").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $(".search-product .getProduct").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
