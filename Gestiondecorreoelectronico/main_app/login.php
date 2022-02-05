<?php
require 'conexion.php';
$correo = $mysqli->query("SELECT Nombre, Tipo_usuario 
FROM correo 
WHERE Usuario = '".$_POST['usuariolg']."'
AND Password = '".$_POST['passlg']."'");

$row_cnt = $correo->num_rows;
printf("Result set has %d rows.\n", $row_cnt);

if(($correo->num_rows) > 0):
  $datos = $correo->fetch_assoc();
  echo json_encode(array('error' => false, 'tipo' => $datos['Tipo_usuario']));
else:
    echo json_encode(array('error' => true));
endif;

$mysqli->close();
?>