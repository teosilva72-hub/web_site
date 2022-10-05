$(()=>{
    $("#searchProduct").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $(".search-product .getProduct").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#searchBebidas").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $(".listBebidas .get-bebida").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
