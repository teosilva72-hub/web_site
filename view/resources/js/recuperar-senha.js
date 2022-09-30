const redirect = () => {
    $('#setRecupere').click(()=>{
        if($('#email').val() == ''.trim()){
           $('.error').text('Campo Obrigatório!')
           $('.error').addClass('on')
        }else{
            window.location.href = '/login';
            alert('E-mail de recuperação enviado com sucesso!')
        }
       
    });
}