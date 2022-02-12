<?php
//Consulta de verificacion de sesion
 include('conexion.php');

$usu 	= $_POST["txtusuario"]; //obtener datos del usuario tecleado
$pass 	= $_POST["txtpassword"]; //obtener datos del contraseña tecleada
$rol 	= $_POST["rol"]; //obtener datos del tipo de persona que esta ingresando


//Sentencia MYSQL
$queryusuario = mysqli_query($conn,"SELECT * FROM login WHERE usuario ='$usu' and pass = '$pass' and rol = '$rol'");
$nr 		= mysqli_num_rows($queryusuario);  // sentencia determinar si los datos ingresador son los mismos de la BD.
	
if ($nr == 1 )  
	{ 
		if($rol=="Usuario") //Sentencia para determinar si el la persona que esta ingresando es usuario o administrador
			{	
				header("Location: Usuario/index.html");
			}
		else if ($rol=="Admin")
			{
				header("Location: pag_admin.php");
			}
	}
else
	{
	echo "<script> alert('Usuario, contraseña o rol incorrecto.');window.location= 'index.html' </script>";
	}

/*VaidrollTeam*/
?>
