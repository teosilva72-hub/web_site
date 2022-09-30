$(init => {
    const check = loading(true, 2000);

});

function loading(check, delay) {
    if (check) {
        setTimeout(() => {
            $('.loading').removeClass('on');
            $('.loader1').removeClass('spinner-border');
        }, delay)
    }
    return check;
}