<?php 

include ("../conexion/conexion.php");
$id =  $_POST['id'];
$query = "SELECT * FROM business WHERE id = '$id'";
$result = mysqli_query($conexion,$query);
while ($row = mysqli_fetch_array($result)){
	$json[]= array(
		'nombre' =>  $row['name'],
		'ruc' => $row['ruc'],
		'rubro' => $row['rubro'],
		'direccion' => $row['address'],
		'referencia' => $row['address_reference'],
		'aniversario' => $row['anniversary'],
		'web' => $row['page_web']
	);
}
	$jsonString = json_encode($json);
	echo $jsonString;

 ?>