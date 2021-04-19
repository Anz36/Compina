<?php
    session_start();
    include ("../conexion/conexion.php");
    $idUsuario = $_SESSION['usuario']; 
    $query = "SELECT * FROM people WHERE id = '$idUsuario'";
    $result = mysqli_query($conexion,$query);
    while($row = mysqli_fetch_array($result)){
    	echo $row['name']." ".$row['last_name'];
    }
?>