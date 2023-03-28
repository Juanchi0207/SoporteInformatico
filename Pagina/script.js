'use strict'

const forms = document.querySelectorAll('.needs-validation')

const inputNombre=document.getElementById("validationCustom01");
inputNombre.addEventListener("input",validarNombre);
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
function validarNombre(){
    console.log(document.getElementById("validationCustom01").value.length);
    var inputNombre = document.getElementById("validationCustom01");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
    }
    else{
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarApellido(){
    console.log(document.getElementById("validationCustom02").value.length);
    var inputNombre = document.getElementById("validationCustom02");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
    }
    else{
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarUsuario(){
    console.log(document.getElementById("validationCustomUsername").value.length);
    var inputNombre = document.getElementById("validationCustomUsername");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
    }
    else{
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarCiudad(){
    console.log(document.getElementById("validationCustom03").value.length);
    var inputNombre = document.getElementById("validationCustom03");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
    }
    else{
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}

function validarCodigoP(){
    console.log(document.getElementById("validationCustom05").value.length);
    var inputNombre = document.getElementById("validationCustom05");
    if (inputNombre.value.length < 7){
        inputNombre.classList.remove("is-valid");
    }
    else{
        inputNombre.classList.add("is-valid");
        inputNombre.classList.remove("is-invalid");
    }
}


