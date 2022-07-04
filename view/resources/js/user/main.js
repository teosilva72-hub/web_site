$(() => {
    $('#cesta').addClass('d-none');
    $('#cep').on('change', () => {
        viaCep($('#cep').val());
    })
    $('.validation').on('change', () => {
        inputValidation();
    })
});

async function viaCep(cep) {
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',

    }).then(result => {
        setInputs(result);
        if (result.erro) {
            alert('CEP não encontrado !!! \n')
        }
    }).catch((e) => {
        alert('CEP não encontrado !!! \n' + e)
    });
}

function setInputs(val) {
    $('#logradouro').val(val.logradouro);
    $('#Bairro').val(val.bairro);
    $('#cidade').val(val.localidade);
    $('#uf').val(val.uf);
}

function inputValidation() {
    let inputs = $('validation');
    console.log('aqui')
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value != ''.trim()) {
            $('.btn-cadastrar-user').prop('disabled', false)
        }
    }
}