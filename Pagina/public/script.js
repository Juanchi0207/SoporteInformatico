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
        usuarioEstado=0;
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
      contraseñaEstado=0;
    } else {
      $("#validationCustom02").removeClass("is-invalid");
      $("#validationCustom02").addClass("is-valid");
      $("#ayudaContrasena").text("Esta joya");
      contraseñaEstado=1;
    }
  });

  $("#toggleVisibility").click(function() {
    var contrasenaInput = $("#validationCustom02");
    var isVisible = contrasenaInput.attr("type") === "text";

    if (isVisible) {
      contrasenaInput.attr("type", "password");
      $(this).html('<i class="far fa-eye"></i>');
    } else {
      contrasenaInput.attr("type", "text");
      $(this).html('<i class="far fa-eye-slash"></i>');
    }
  });
});  


function enviarFormulario(){
    if(usuarioEstado==1 & contraseñaEstado==1){
      console.log($("#formularioUsuarios").serialize());
    $.ajax({
        method: "post",
        url:"http://localhost:3000/insertar",
        data: $("#formularioUsuarios").serialize(),
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

