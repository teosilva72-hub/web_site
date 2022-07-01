$(init => {
    carrinho();
    if ($('#userName').val() == ''.trim()) {
        let name = localStorage.getItem('Name')
        if (name != null)
            $('.linkLogin').addClass('d-none'), console.log(1)
        else $('.linkLogin').addClass('d-block')
    } else storage($('#userName').val());
})

function carrinho() {
    $('#cesta').click(() => {
        $("#btn-modal").click()
    })
}

function storage(user) {
    localStorage.setItem('Name', user);
    localStorage.setItem('email', email);
    $('.linkLogin').addClass('d-none')
}