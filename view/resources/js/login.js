$(() => {
    closeDiv()
    validateForm()
    enterFild()
})

function enterFild() {
    $('form input').change(() => {
        validateForm()
    })
}

function validateForm() {
    const form = $('form input')
    input = []
    for (let i = 0; i < form.length; i++) {
        input[i] = form.get(i).value
        if (input[i] == ''.trim()) {
            disableActiveBtn(true)
        } else {
            disableActiveBtn(false)
        }
    }
}

function disableActiveBtn(checked) {
    $('#logar').attr('disabled', checked)
}

function closeDiv() {
    $("#close-session-login").click(() => {
        //var id = $(this).attr("id");
        $('#login-session').addClass('hidden')
        const iconLogin = `<svg id="iconLogin" width="50 " height="50 " fill="currentColor " class="bi bi-person-circle " viewBox="0 0 16 16 "><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z "/><path fill-rule="evenodd " d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z "/></svg>`
        $('#icon-login-top').append(iconLogin)

        $('#iconLogin').click(() => {
            $('#iconLogin').remove()
            $('#login-session').removeClass('hidden')
        })
    });
}