$("#btnEnviar").click(function(){
    var mensaje = $("#mensaje").val();
    if(mensaje == ""){
        $("#mensaje").addClass("is-invalid");
        $("#errorMensaje").html("El mensaje es obligatorio");
        return;
    }
    else{
        $("#mensaje").removeClass("is-invalid");
    }
    $.ajax({
        url: "../c/enviarCorreo.php",
        method: 'post',
        data: {'mensaje': mensaje},
        success: function(resp){
            if(resp == "mensajeEnviado"){
                alert("El correo fue enviado");
            }
            else{
                alert("Algo salio mal al enviar el correo");
            }
        }
    });
});