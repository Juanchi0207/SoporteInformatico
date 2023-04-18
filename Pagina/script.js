'use strict'

const forms = document.querySelectorAll('.needs-validation')


const inputNombre=$("#validationCustom01");
inputNombre.focus(validarNombre);
const inputApellido=document.getElementById("validationCustom02");
inputApellido.addEventListener("input",validarApellido);
const inputUsuario=document.getElementById("validationCustomUsername");
inputUsuario.addEventListener("input",validarUsuario);
const inputCiudad=document.getElementById("validationCustom03");
inputCiudad.addEventListener("input",validarCiudad);
const inputCodigoP=document.getElementById("validationCustom05");
inputCodigoP.addEventListener("input",validarCodigoP);
/*Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})
*/
var intervalo = setInterval (cambiar, 3000)
var contador = 1;
/*
function anterior(){
    $("#img"+(contador)).fadeOut(500);
    contador=contador-2;
    if(contador<1){
        contador=3;
    }
    $("#img"+(contador)).fadeIn(1500);
    
}
*/
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
/*
function siguiente(){
    $("#img"+(contador)).fadeOut(500);
    if(contador==4){
        contador=1;
    }
    $("#img"+(contador)).fadeIn(1500);
    console.log("AFAF")
}*/

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
    console.log("AFAF")
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


    
function validarNombre(){
    console.log(document.getElementById("validationCustom01").value.length);
    var inputNombre = document.getElementById("validationCustom01");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
        enviar = false;
    }
    else{
        enviar = true;
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarApellido(){
    console.log(document.getElementById("validationCustom02").value.length);
    var inputNombre = document.getElementById("validationCustom02");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
        enviar = false;
    }
    else{
        enviar = true;
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarUsuario(){
    console.log(document.getElementById("validationCustomUsername").value.length);
    var inputNombre = document.getElementById("validationCustomUsername");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
        enviar = false;
    }
    else{
        enviar = true;
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarCiudad(){
    console.log(document.getElementById("validationCustom03").value.length);
    var inputNombre = document.getElementById("validationCustom03");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
        enviar = false;
    }
    else{
        enviar = true;
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarCodigoP(){
    console.log(document.getElementById("validationCustom05").value.length);
    var inputNombre = document.getElementById("validationCustom05");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
        enviar = false;
    }
    else{
        enviar = true;
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function enviarFormulario(e){
    if (enviar == false){
        e.preventDefault();
    }
}

