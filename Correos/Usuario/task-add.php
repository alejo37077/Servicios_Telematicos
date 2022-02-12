<?php

  include('database.php');
//Enviar Correo Electronico
if(isset($_POST['name'])) { 
  $task_name = $_POST['name']; // obtener nombre del correo
  $task_description = $_POST['description']; // obtener descripcion del correo
  $query = "INSERT into bandeja (name, description) VALUES ('$task_name', '$task_description')";
  $result = mysqli_query($connection, $query); //adicionar a la base de datos

  if (!$result) {
    die('Fallo Query.');
  }

  echo "Enviado el correo";  

}

?>
