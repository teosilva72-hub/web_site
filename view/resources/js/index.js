$(() => {
    storageUser($('#userName').val())
    modalPedidos();
    blockedBtn(true, '.btn-add');
    getMyItem()
});

function blockedBtn(check, el) {
    $(`${el}`).prop('disabled', check)
}

function storageUser(user) {
    if (user != ''.trim()) {
        user = user.split(',');
        localStorage.setItem('name', user[0]);
        localStorage.setItem('email', user[1]);
        alert1();

    } else {
        if (localStorage.getItem('name') == null) {
            //ninguém logado
            console.log('aqui')
            alert2();
        } else {

        }
    }
}

function alert1() {
    let alerts = `<div class="alert alert-success alert-ola" role="alert">
        <svg width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
        Olá, ${localStorage.getItem('name')}!!!
    </div>`;
    $('.top-categoria').append(alerts)
    setTimeout(() => {
        $('.alert-ola').remove()
    }, 15000);
}

function alert2() {
    let alerts = `<div class="alert alert-warning alert-hello" role="alert">
    <svg width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
        <a href="/login" class="navbar-brand"><b>Faça login</b>, Click aqui !</a>
    </div>`;
    $('.top-categoria').append(alerts)
    setTimeout(() => {
        $('.alert-hello').remove()
    }, 15000);
}

function selectInput(id) {
    for (var i = 0; i <= 30; i++) {
        let init = ``;
        $(`#${id}`).append(`
            <option value="${i}">${i}</option>
        `);
    }
    $(`#${id}`).change(() => {
        const value = $(`.${id}`);
        value.val($(`#${id}`).val());
        const opt = Number($(`#${id}`).val());
        if (opt >= 1) {
            blockedBtn(false, `.${id}btn`);
        } else {
            blockedBtn(true, `.${id}btn`);
        }
    });
}

function modalPedidos() {
    $('#cesta').click(() => {
        $('#btn-modal').click();
    });
}
const nameItem = [],
    description = [],
    valor = [],
    unid = [],
    cod = [];

function getPedidos(id) {
    const obj = $(`.${id}`);
    nameItem[0] = obj[0].value
    valor[0] = obj[1].value
    description[0] = obj[2].value;
    unid[0] = obj[3].value;
    cod[0] = obj[4].value
    setItemStorage(nameItem, valor, unid, cod);
    getMyItem()
}

function setItemStorage(name, value, un, cod) {

    let val = 0;
    let index = 0;
    val = localStorage.length + 1;
    const item = [name, value, un, val];
    localStorage.setItem(`${val}`, item);
    getTotalItem();
}

function getMyItem() {
    $('.subclass').remove()
    for (var i = 1; i <= localStorage.length; i++) {
        $('#item-total').text(`${ localStorage.length }`);
        let result = localStorage.getItem(i);
        result = result.split(',');

        $('#my-items').append(`
            <div class="col-sm-12 subclass codProd${i}">Item: <b>${ result[3]}</b></div>
            <div class="col-sm-12 subclass produto${i}">Produto: <b>${ result[0]}</b></div>
            <div class="col-sm-12 subclass valor${i}">Valor: <b>${ result[1]}</b></div>
            <div class="col-sm-12 subclass unidade${i}">Unidade: <b>${ result[2]}</b></div>
            <div class="col-sm-12 subclass link${i}">
            <a class="btn btn-success" href="#"> Add Un.</a>
            <a class="btn btn-danger" href="#">Remover Item</a>
            <hr></div>
            
        `);


    }
}

function getTotalItem() {
    $('#item-total').text(`${ localStorage.length }`);
}