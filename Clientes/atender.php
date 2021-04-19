<?php 

function getPersonal($dato){
    include ("../conexion/conexion.php");
    $query = "SELECT CONCAT(name,' ',last_name) AS nombres FROM people WHERE id = '$dato'";
    $result = mysqli_query($conexion,$query);
    $row = mysqli_fetch_array($result);
    return $row['nombres'];
}

	include ("../conexion/conexion.php");
    session_start();
    $personal = $_SESSION['usuario'];
	$id = $_POST["id"];
    $query = "SELECT * FROM requirements where id = '2'";
    $result = mysqli_query($conexion,$query);
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'empresa' => $row['business'],
            'cliente' => $row['name'],
            'personal' => getPersonal($personal)
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString; 
	
 ?>