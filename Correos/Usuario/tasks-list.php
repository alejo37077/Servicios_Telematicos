<?php

  include('database.php');
  //Busca los correos y los imprime
  $query = "SELECT * from bandeja"; //ir a la tabla bandeja en la base de datos
  $result = mysqli_query($connection, $query); //conectar la base de datos
  if(!$result) {
    die('Fallo del Query.'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'name' => $row['name'], //enviar el nombre a la pagina
      'description' => $row['description'], //enviar la descripcion a la pagina
      'id' => $row['id'] //enviar el id a la pagina
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring; //imprimir los datos en la pagina web
?>
