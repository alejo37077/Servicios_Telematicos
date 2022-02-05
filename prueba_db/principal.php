<?php

function conectar()
{

 $user="root";
 $pass="";
 $server="localhost";
 $db="gestioncorreo";
 
 $mysqli = new mysqli($server, $user, $pass, $db);
 if($mysqli->connect_errno):
    echo "Error al conectarse a MySQL debido al error".$mysqli->connect_error;
 endif;

return $mysqli;
}

$mysqli = conectar();
echo "Se realizo con exito la conexion de la base de datos";

?>