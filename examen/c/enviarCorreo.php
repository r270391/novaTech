<?php
$mensaje = trim($_POST['mensaje']);

if($mensaje == ""){
    echo "sinMensaje";
    exit(0);
}
$envioCorreo = mail("12franciscofh@gmail.com", "Correo del examen", $mensaje);
if($envioCorreo){
    echo "mensajeEnviado";
}
else{
    echo "mensajeError";
}
?>