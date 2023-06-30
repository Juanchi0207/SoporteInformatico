enviar= false;
var intervalo = setInterval (cambiar, 3000)
var contador = 1;

function anterior(){
    clearInterval(intervalo);
    $("#img"+(contador)).css("display","none");
    if(contador==1){
        contador=3;
    }
    else{
        contador=contador-1;
    }
    $("#img"+(contador)).css("display","block");
    intervalo = setInterval (cambiar, 3000)
}


function siguiente(){
   clearInterval(intervalo);
    console.log("#img"+(contador));
    $("#img"+(contador)).css("display","none");
    if(contador==3){
        contador=1;
    }
    else{
        contador +=1;
    }
    $("#img"+(contador)).css("display","block");
    intervalo = setInterval (cambiar, 3000)
}

function cambiar(){
    $("#img"+(contador)).css("display","none");
    if (contador==3){
        contador=1;
    }
    else{
        contador +=1;
    }
    $("#img"+contador).css("display","block");
   
}