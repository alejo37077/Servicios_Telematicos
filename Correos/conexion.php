
<?php
//Conexion a la base de datos MYSQL 

$conn = new mysqli("127.0.0.1","root","","correo",3307);
	
	if($conn->connect_errno)
	{
		echo "No hay conexión: (" . $conn->connect_errno . ") " . $conn->connect_error;
	}
?>