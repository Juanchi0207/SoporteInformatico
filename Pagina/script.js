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

var enviar= false;
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
    obtenerDatos();
}

function obtenerDatos(){
    var nombre=getElementById("validationCustom01").value;
    var apellido=getElementById("validationCustom02").value;
    var usuario=getElementById("validationCustomUsername").value;
    var ciudad=getElementById("validationCustom03").value;
    var codigoPostal =getElementById( "validationCustom03").value;
    console.log(nombre);
    console.log(codigoPostal);
}

