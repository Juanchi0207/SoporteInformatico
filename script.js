'use strict'


var usuarioEstado=0;
var contraseñaEstado=0;



$(document).ready(function() {
    $("#validationCustom01").on("input", function() {
      var usuarioLength = $("#validationCustom01").val().length;
      console.log(usuarioLength);
      if (usuarioLength < 5) {
        $("#validationCustom01").addClass("is-invalid");
        $("#validationCustom01").removeClass("is-valid");
        $("#ayudaUsuario").text("El usuario debe tener minimo 5 caracteres");
      } else {
        $("#validationCustom01").removeClass("is-invalid");
        $("#validationCustom01").addClass("is-valid");
        $("#ayudaUsuario").text("Esta joya");
        usuarioEstado=1;
      }
    });

$("#validationCustom02").on("input", function() {
    var contrasenaLength = $("#validationCustom02").val().length;
    var contrasena = $("#validationCustom02").val();
    var contrasenaLength = contrasena.length;
    var hasUpperCase = /[A-Z]/.test(contrasena);
    var hasNumber = /\d/.test(contrasena);

    if (contrasenaLength < 8 || !hasUpperCase || !hasNumber) {
      $("#validationCustom02").addClass("is-invalid");
      $("#validationCustom02").removeClass("is-valid");
      $("#ayudaContrasena").text("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    } else {
      $("#validationCustom02").removeClass("is-invalid");
      $("#validationCustom02").addClass("is-valid");
      $("#ayudaContrasena").text("Esta joya");
    }
  });
});  


function enviarFormulario(){
    if(usuarioEstado==1 & contraseñaEstado==1){
    $.ajax({
        method: "post",
        url:"http://localhost:3000/insertar",
        data: $("#formulariosUsuarios").serialize(),
        success: function(response) {
            alert("Datos enviados y guardados en la base de datos.");
          },
          error: function(xhr, status, error) {
            alert("Error al enviar los datos: " + error);
          }
      })
    }
    else if(usuarioEstado==0 & contraseñaEstado==0){
        alert("La contraseña y el usuario no son suficientemente largos");
    }
    else if(usuarioEstado==0){
        alert("El usuario es muy corto");
    }
    else{
        alert("La contraseña es muy corta")
    }
}

