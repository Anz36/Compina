<?php 
	include ("../conexion/conexion.php");
	$id = $_POST["id"];
    $query = "SELECT * FROM requirements where id = '$id'";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'empresa' => $row['business'],
            'cliente' => $row['name']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString; 
	
 ?>