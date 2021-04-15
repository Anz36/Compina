<?php 

function getDato($dato){
	include ("../conexion/conexion.php");
	$query = "SELECT * FROM business WHERE id = '$dato'";
	$result = mysqli_query($conexion,$query);
	$row = mysqli_fetch_array($result);
	return $row['name'];
}

include ("../conexion/conexion.php");
$id =  $_POST['id'];
$query = "SELECT * FROM customers WHERE id = '$id'";
$result = mysqli_query($conexion,$query);
$json = array();
while ($row = mysqli_fetch_array($result)){
	$json[]= array(
		'nombre' =>  $row['name'],
		'empresa' => getDato($row['business']),
		'posicion' => $row['position'],
		'direccion' => $row['address'],
		'distrito' => $row['district'],
		'ciudad' => $row['city'],
		'provincia' => $row['province'],
		'email' => $row['email'],
		'telefono' => $row['phone'],
		'celular' => $row['movil'],
	);
}
	$jsonString = json_encode($json);
	echo $jsonString;

 ?>
