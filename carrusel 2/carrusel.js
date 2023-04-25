
var contador=1;
var intervalo;
var cantImg;

function activarMiCarousel(id, tiempo){
$("#" + id).children("img").addClass("imagenesCarrusel");
cantImg = $(".imagenesCarrusel");
console.log(cantImg.length);
intervalo = setInterval (cambiar, 3000);
}

function cambiar(){
    console.log("h")
        $("#img"+(contador)).css("display","none");
        if (contador==cantImg.length){
            contador=1;
        }
        else{
            contador++;
        }
        $("#img"+contador).css("display","block");
}
