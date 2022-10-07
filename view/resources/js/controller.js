const setItem = res => {
    console.log(res)
}


$(()=>{
   
    //Change()
    validation();
});

function Change(){
    var input = $('#formUser input');
    input.on('change',(e)=>{
        for(var i =0;i<input.length;i++){
            console.log(input.get(i).value)
            if(input.get(i).value == ''.trim()){
                input.get(i).style.border = 'solid 2px red'
            }
            if(input.get(i).value != ''.trim()){
                input.get(i).style.border = 'solid 2px green'
            }
        }
    })
}

function validation(){
    var input = $('#formUser input');
    $('.btn-cadastrar-user').click(()=>{
        Change()
        for(var i =0;i<input.length;i++){
            console.log(input.get(i).value)
            if(input.get(i).value == ''.trim()){
                input.get(i).style.border = 'solid 2px red'
            }
            if(input.get(i).value != ''.trim()){
                input.get(i).style.border = 'solid 2px green'
            }
        }
    });
}