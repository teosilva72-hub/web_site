const redirect = () => {
    $('#setRecupere').click(()=>{
        if($('#email').val() == ''.trim()){
           $('.error').text('Campo Obrigatório!')
           $('.error').addClass('on')
        }else{
            window.location.href = '/';
        }
       
    });
}