<?php

include('database.php');
//Elimina un correo
if(isset($_POST['id'])) { //obtener el id del correo seleccionado
  $id = $_POST['id']; //Guardar la id
  $query = "DELETE FROM bandeja WHERE id = $id";  
  $result = mysqli_query($connection, $query); //borrar ese correo de la base de datos

  if (!$result) { 
    die('Fallo Query.');
  }
  echo "Se elimino el correo";  

}

?>
